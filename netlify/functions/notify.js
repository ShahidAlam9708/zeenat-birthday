exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'no' };
  const token = process.env.BOT_TOKEN, chat = process.env.CHAT_ID;
  if (!token || !chat) return { statusCode: 500, body: 'env' };
  let p; try { p = JSON.parse(event.body || '{}'); } catch { return { statusCode: 400, body: 'json' }; }
  const call = async (m, init) => { const r = await fetch(`https://api.telegram.org/bot${token}/${m}`, init); if (!r.ok) throw new Error('tg'); };
  try {
    if (p.type === 'text') {
      const text = String(p.text || '').trim().slice(0, 4000);
      if (!text) return { statusCode: 400, body: 'empty' };
      await call('sendMessage', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: chat, text }) });
    } else if (p.type === 'photo') {
      const m = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/.exec(p.data || '');
      if (!m) return { statusCode: 400, body: 'photo' };
      const buf = Buffer.from(m[2], 'base64');
      if (buf.length > 4.5 * 1024 * 1024) return { statusCode: 413, body: 'big' };
      const fd = new FormData();
      fd.append('chat_id', chat);
      fd.append('caption', String(p.caption || '').slice(0, 900));
      fd.append('photo', new Blob([buf], { type: 'image/' + m[1] }), 'zeenat.' + (m[1] === 'jpeg' ? 'jpg' : m[1]));
      await call('sendPhoto', { method: 'POST', body: fd });
    } else return { statusCode: 400, body: 'type' };
    return { statusCode: 200, body: 'ok' };
  } catch (e) { return { statusCode: 502, body: 'up' }; }
};
