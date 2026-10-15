/* ===== EDIT ME ===== */
var PHOTOS = [];
var CAPS = ["Tuition ke din", "Hamari baatein", "Ek yaadgaar pal"];

var QUIZ = [
  {q:"Tumhe tuition ki sabse zyada yaad kis cheez ki aati hai? 😂",o:["Padhai ki 📚","Friends ke saath masti 😂","Chhup-chhup ke baatein 🤭","Inmein se kisi cheez ki nahi 😭"]},
  {q:"Tuition mein hum dono mein se zyada shararti kaun tha? 😜",o:["Main, obviously 😂","Tum, innocent cute face wali 😇","Dono ek se badhkar ek 🤝😂","Sir hi pareshaan rehte the humse 😁"]},
  {q:"Mere baare mein tumhari first impression kya thi? 🤔",o:["Achha ladka hai 😇","Bahut bolta hai 😂","Thoda ajeeb hai yaar 🤨","Isse door hi rehna chahiye 😭"]},
  {q:"Agar tumhe tuition ke dino ko ek din dobara jeene ka mauka mile, toh kya choose karogi? 🥹",o:["Friends ke saath woh masti 😂","Class main padhai ke sath wali baatein 🫶","Woh bina tension wale din ❤️‍🩹","Poora tuition ka safar, ek baar phir ❤️"]},
  {q:"Tumhare hisaab se meri sabse memorable aadat kya thi? 😂",o:["Har baat par mazaak karna 😂","Chhoti-chhoti baaton ko dil par lena 🥹","Tuition main sabse friend zone hona","Tumhe tang karna, obviously 😜"]},
  {q:"Agar tum apne purane tuition wale version ko ek baat keh sakti, toh kya kehti? ✨",o:["Har pal ko khulkar jeena ❤️","Itna overthink mat karna 🥹","Apni smile kabhi mat khona 😊","Ek din yahi yaadein sabse precious hongi 🫶"]},
  {q:"Hamare beech jo bond tha, usko tum aaj kis tarah yaad karti ho? 🌸",o:["Ek pyari si dosti 🫶","Ek khoobsurat purani yaad 🌸","Life ki book ka ek chapter 📖","Dosti se badhkar kuch ❤️"]},
  {q:"Jab hum dono baat karte the, toh pehle message karne ki zyada jaldi kise hoti thi? 🤭",o:["Mujhe, main toh hamesha ready 😂","Tumhe, bas maanti nahi thi 🤭","Dono ko, par ego beech mein aa jaati thi 😭","Jise pehle yaad aati thi, woh message kar deta tha ❤️"]},
  {q:"Madam ji, meri pending birthday party aur tumhari shaadi ki party aakhir kab mil rahi hai? 😂🎂💍",o:["Jab main bolun, tabhi 😎","Jab tumhara mann kare 😂","Kabhi nahi, sapne dekhte raho 🤣","Sochungi, abhi koi guarantee nahi hai 🤭"]},
  {
    open:1,
    q:"Achha madam ji, ek baat batao… 😂❤️",
    body:"Kya tumhe yaad hai jab tuition ke time hum dono ki dosti dheere-dheere gehri hone lagi thi? Uss waqt tumne aisa kya socha tha jo mujh jaise nalayak insaan 😅 se dosti kar li? Aakhir aisi kya majboori thi tumhari? 😂😭<br><br>Aur achha, kya tumhe hamari uss purani dosti ki kuch memories bhi yaad hain? Koi aisi baat, koi moment ya koi chhota sa pal, jo aaj bhi tumhe yaad ho? 🥹❤️"
  }
];

var WISHES = [
  {t:"Sehat aur Sukoon 🌸",b:"Allah tumhe hamesha khush aur healthy rakhe… kyunki tumhari smile dekhkar toh main......... Khair, aage nahi bolunga, warna madam ji phir se hawa mein udne lagengi! 😂🤭 Bas tumhari smile hamesha aise hi bani rahe aur tumhare chehre par khushi kabhi kam na ho. 🙈❤️"},
  {t:"Har Sapna Poora Ho ✨",b:"Tumhare saare sapne pura ho… aur agar kabhi sapno mein koi pagal tuition friend aa jaaye, toh darna mat, woh main hi rahunga. 😂🤭 Bas sapne mein bhi mujhe dekhkar ignore mat kar dena! 😭😂"},
  {t:"Pyaar Beshumaar Mile 💗",b:"Tumhe itna pyaar aur apnapan mile ki zindagi mein kabhi kisi cheez ki kami mehsoos na ho… aur tumhari woh cute si smile hamesha bani rahe, jo tumhe sabse alag banati hai. 😊❤️"},
  {t:"Hasi Aur Kam Tension 😜",b:"Tum hamesha aise hi hasti rehna… aur apni hasi se aas-paas ke logo ka mood bhi achha karti rehna. 😊 Waise tumhari bakbak aur shararatein bhi kam interesting nahi hain! 😂❤️"},
  {t:"Life Mein Celebration 🎉",b:"Tumhari life mein khushiyan hi khushiyan ho… aur birthday par cake khilana mat bhula. Waise meri treat abhi bhi pending hai, ya madam ji ne mujhe pending files mein daal diya hai? 😂🎂"},
  {t:"Treat Udhaar, Dua Full 🤭",b:"Birthday ki treat alag, shaadi ki treat alag… aur dono ka hisaab abhi tak pending! 😂 Bas dua hai tum hamesha khush raho aur tumhari zindagi mein barkat bani rahe. Waise treat dene ka iraada hai bhi ya mujhe buddha hone tak wait karwaogi? 😭🤣"},
  {t:"Tumhari Smile 😊❤️",b:"Tumhari smile hamesha aisi hi rahe… kyunki sach kahun, tum agar kabhi serious hokar gussa bhi hoti hogi, toh tumhare face par ek cute si smile zaroor aa jaati hogi. 😂🤭 Waise gusse mein tum kitni dangerous lagti ho, iska to mujhe nahi pata! 😜"},
  {t:"Birthday Girl, Still Special ✨",b:"Ek baat bataun? Tumhari age badh rahi hai, par tuition wali cute aur shararti Zeenat ki image mere dimaag mein abhi bhi update nahi hui. 😂 Kuch yaadein waqt ke saath purani zaroor ho jaati hain, par unki mithaas bani rehti hai. 🤭❤️ Waise madam ji, shararaton ka software update hua ya abhi bhi wahi purana version chal raha hai? 😜😂"},
  {t:"Tumhari Little Princess 👶🏻🩷",b:"Allah tumhari chhoti si princess Anam ko hamesha hansta-muskurata rakhe aur tum dono ki zindagi pyaar, sukoon aur barkat se bhar de. 🤲❤️ Aur haan, usse apni jaisi shararatein thodi-thodi zaroor sikhana… bas tuition wali saari shararatein ek saath mat sikha dena, warna tum dono ko sambhalna mushkil ho jayega! 😂🫶"},
  {t:"Kuch Yaadein Special Hoti Hain 🥹",b:"Zindagi mein log aate-jaate rehte hain, par kuch logon ke saath judi yaadein hamesha special rehti hain… tumhari smile, tumhari baatein aur hamari tuition wali masti bhi unhi pyari yaadon mein se hain. ❤️ Waqt badal jaata hai, sab apni-apni zindagi mein aage badh jaate hain, par achhi yaadein hamesha muskurane ki wajah ban sakti hain. 🥹✨"}
];

var LETTER = `Zeenat,

Tuition ke wo din aaj bhi yaad aate hain, jab sawalon se zyada tumhari baatein lambi chalti thi. 😜 Waqt badal gaya, aur shayad tum bhi... 🙃 lekin tumhari hasi wahi, shaitaniyan wahi... 🫠 ab bhi utni hi masoom ho ya apni masoomiyat thodi hide kar di ho 😝

Khair... dua hai ki tumhari smile aise hi bani rahe, tumhe zindagi mein wo sab kuch milta rahe jiski tum haqdar ho.

On your birthday, I just want to pray that Allah keeps you happy, gives you peace, and makes things easier for you in every phase of life. May you always have reasons to smile, people who genuinely care for you, and the happiness you deserve.

Allah tumhe hamesha apni hifazat mein rakhe. ❤️

-Tumhara tuition wala dost`;

/* ==================== */
var $ = function(i) {
  return document.getElementById(i);
};
var R = Math.random;

var cur = 0;
var ok = {};
var gate = {2:1,3:1,5:1,6:1};
var TOTAL = 8;

/* ---------- background ---------- */
(function() {
  var c = ['#ff5c8a','#ff9a6b','#c04cff','#ffd27a','#ff7fc0'];
  var h = '';

  for (var i = 0; i < 13; i++) {
    var s = 50 + R() * 110;
    h += '<div class="bk" style="width:' + s +
      'px;height:' + s +
      'px;left:' + R() * 100 +
      '%;top:' + R() * 100 +
      '%;background:' + c[i % 5] +
      ';opacity:' + (.07 + R() * .12) +
      ';animation-delay:-' + R() * 10 + 's"></div>';
  }

  $('bg').innerHTML = h;

  setInterval(function() {
    if (document.hidden) return;

    var e = document.createElement('div');
    e.className = 'ht';
    e.textContent = R() < .8 ? '♥' : '❀';
    e.style.left = R() * 100 + '%';
    e.style.fontSize = (11 + R() * 18) + 'px';
    e.style.opacity = .25 + R() * .35;
    $('bg').appendChild(e);

    e.animate([
      {transform:'translate(0,0) rotate(0)'},
      {transform:'translate(' + (R() * 80 - 40) +
        'px,-' + (innerHeight + 60) +
        'px) rotate(' + (R() * 120 - 60) + 'deg)'}
    ], {
      duration:8000 + R() * 5000
    }).onfinish = function() {
      e.remove();
    };
  }, 700);
})();

/* ---------- confetti ---------- */
var COLS = ['#ff5c8a','#ffd27a','#ff9a6b','#c9a2ff','#fff','#7fe0d0'];

function burst(x,y,n,cols,sp) {
  for (var i = 0; i < n; i++) {
    var p = document.createElement('div');
    p.className = 'bit';

    var s = 5 + R() * 6;
    p.style.cssText = 'left:' + x + 'px;top:' + y +
      'px;width:' + s + 'px;height:' + s * .6 +
      'px;background:' + cols[i % cols.length];

    document.body.appendChild(p);

    var a = R() * 6.283;
    var d = sp * (.35 + R() * .65);

    p.animate([
      {transform:'translate(0,0) rotate(0)',opacity:1},
      {transform:'translate(' + Math.cos(a) * d +
        'px,' + (Math.sin(a) * d + 50) +
        'px) rotate(' + R() * 720 + 'deg)',opacity:0}
    ], {
      duration:800 + R() * 700,
      easing:'cubic-bezier(.2,.7,.4,1)'
    }).onfinish = (function(el) {
      return function() {
        el.remove();
      };
    })(p);
  }
}

function rain(n) {
  for (var i = 0; i < n; i++) {
    var p = document.createElement('div');
    p.className = 'bit';

    var s = 6 + R() * 6;
    p.style.cssText = 'left:' + R() * innerWidth +
      'px;top:-14px;width:' + s +
      'px;height:' + s * .55 +
      'px;background:' + COLS[i % 6];

    document.body.appendChild(p);

    p.animate([
      {transform:'translate(0,0) rotate(0)'},
      {transform:'translate(' + (R() * 120 - 60) +
        'px,' + (innerHeight + 30) +
        'px) rotate(' + R() * 900 + 'deg)'}
    ], {
      duration:2800 + R() * 2500,
      delay:R() * 1800,
      fill:'backwards'
    }).onfinish = (function(el) {
      return function() {
        el.remove();
      };
    })(p);
  }
}

/* ---------- local-only helpers ---------- */
function tg(t) {
  // Answers are kept in this browser.
  // No answers or photos are sent to a server.
}

function toast(m) {
  var t = $('toast');
  t.textContent = m;
  t.style.display = 'block';
  clearTimeout(toast.h);

  toast.h = setTimeout(function() {
    t.style.display = 'none';
  }, 2600);
}

/* ---------- navigation ---------- */
var volOk = false;

$('volok').onclick = function() {
  volOk = true;
  $('vol').style.display = 'none';

  if (AC && AC.state === 'suspended') AC.resume();
  show(2);
};

function updateNextButton() {
  var allowed = cur > 0 && cur < 7 && (!gate[cur] || ok[cur]);

  if (cur === 4) {
    allowed = PHOTOS.length >= 10;
  }

  $('next').style.setProperty(
    'display',
    allowed ? 'block' : 'none',
    'important'
  );
}

function show(i) {
  if (i === 2 && !volOk) {
    $('vol').style.display = 'flex';
    return;
  }

  cur = i;

  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('on');
  });

  $('p' + i).classList.add('on');
  window.scrollTo(0, 0);

  $('prog').style.width = ((i + 1) / TOTAL * 100) + '%';

  updateNextButton();

  if (i !== 2) stopSong();
  if (i === 2 && !ok[2]) startSong();

  if (i !== 3) {
    run++;
    document.querySelectorAll('.fb').forEach(function(x) {
      x.remove();
    });
  }

  if (i === 3 && got.length < WISHES.length) game();
  if (i === 7) rain(90);
  if (i === 5) resetLetter();
  if (i === 6 && !ok[6]) quizIntro();
}

function unlock(i) {
  ok[i] = 1;
  updateNextButton();
}

$('next').onclick = function() {
  if (cur === 4 && PHOTOS.length < 10) {
    toast('Pehle sabhi 10 photos add karo 📸');
    updateNextButton();
    return;
  }

  show(cur + 1);
};

/* ---------- login ---------- */
function tryLogin() {
  var u = $('uid').value.trim().toLowerCase();
  var p = $('pw').value.trim();

  $('err').textContent = '';

  if (!u || !p) {
    $('err').textContent = 'ID aur password dono daalo ❤️';
    return;
  }

  if (u === 'zeenat' && (p === '6299164016' || p === '916299164016')) {
    initAudio();
    burst(innerWidth / 2, innerHeight / 2, 50, COLS, 200);
    show(1);
  } else {
    $('err').textContent = 'Galat ID ya password 🙈 Phir se try karo';

    var b = $('lbox');
    b.classList.remove('shake');
    void b.offsetWidth;
    b.classList.add('shake');
  }
}

$('go').type = 'button';
$('go').addEventListener('click', tryLogin);

['uid','pw'].forEach(function(id) {
  $(id).addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      tryLogin();
    }
  });
});

/* ---------- password show/hide ---------- */
$('eye').type = 'button';

$('eye').addEventListener('mousedown', function(e) {
  e.preventDefault();
});

$('eye').addEventListener('click', function(e) {
  e.preventDefault();

  var p = $('pw');
  var showPassword = p.type === 'password';

  p.type = showPassword ? 'text' : 'password';
  this.textContent = showPassword ? '🙈' : '👁️';

  this.setAttribute(
    'aria-label',
    showPassword ? 'Hide password' : 'Show password'
  );
});

/* ---------- counter ---------- */
['YY','MM','DD','HH','MIN','SEC'].forEach(function(l,i) {
  $('cnt').insertAdjacentHTML(
    'beforeend',
    '<div class="u"><b id="c' + i + '">--</b><small>' + l + '</small></div>'
  );
});

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  var now = new Date();
  var last = new Date(now.getFullYear(), 9, 16);

  if (last > now) {
    last = new Date(now.getFullYear() - 1, 9, 16);
  }

  var m = (now.getFullYear() - last.getFullYear()) * 12 +
    now.getMonth() - last.getMonth();

  var a = new Date(last.getFullYear(), last.getMonth() + m, 16);

  if (a > now) {
    m--;
    a = new Date(last.getFullYear(), last.getMonth() + m, 16);
  }

  var ms = now - a;

  [
    'XX',
    pad(m),
    pad(Math.floor(ms / 864e5)),
    pad(Math.floor(ms % 864e5 / 36e5)),
    pad(Math.floor(ms % 36e5 / 6e4)),
    pad(Math.floor(ms % 6e4 / 1e3))
  ].forEach(function(v,i) {
    $('c' + i).textContent = v;
  });
}

tick();
setInterval(tick, 1000);

/* ---------- audio ---------- */
var AC = null;
var song = false;
var master;

function initAudio() {
  try {
    AC = new (window.AudioContext || window.webkitAudioContext)();
    master = AC.createGain();
    master.gain.value = .5;
    master.connect(AC.destination);
  } catch(e) {}
}

var MEL = [
  [392,.75],[392,.25],[440,1],[392,1],[523,1],[494,2],
  [392,.75],[392,.25],[440,1],[392,1],[587,1],[523,2],
  [392,.75],[392,.25],[784,1],[659,1],[523,1],[494,1],
  [440,2],[698,.75],[698,.25],[659,1],[523,1],[587,1],[523,2]
];

function note(f,t,d) {
  var o = AC.createOscillator();
  var g = AC.createGain();

  o.type = 'triangle';
  o.frequency.value = f;

  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(.35, t + .03);
  g.gain.exponentialRampToValueAtTime(.001, t + d);

  o.connect(g);
  g.connect(master);
  o.start(t);
  o.stop(t + d + .05);
}

function startSong() {
  if (!AC || song) return;

  song = true;

  if (AC.state === 'suspended') AC.resume();
  master.gain.value = .5;

  (function loop() {
    if (!song) return;

    var t = AC.currentTime + .05;

    MEL.forEach(function(n) {
      note(n[0], t, n[1] * .52);
      t += n[1] * .55;
    });

    setTimeout(loop, (t - AC.currentTime) * 1000 + 800);
  })();
}

function stopSong() {
  if (song && AC) {
    song = false;
    master.gain.setValueAtTime(0, AC.currentTime);
  }
}

function noise(t,d,f,v) {
  var n = AC.sampleRate * d;
  var b = AC.createBuffer(1, n, AC.sampleRate);
  var x = b.getChannelData(0);

  for (var i = 0; i < n; i++) {
    x[i] = (R() * 2 - 1) * (1 - i / n);
  }

  var s = AC.createBufferSource();
  s.buffer = b;

  var q = AC.createBiquadFilter();
  q.type = 'bandpass';
  q.frequency.value = f;

  var g = AC.createGain();
  g.gain.value = v;

  s.connect(q);
  q.connect(g);
  g.connect(AC.destination);
  s.start(t);
}

function applause() {
  if (!AC) return;

  if (AC.state === 'suspended') AC.resume();

  var t = AC.currentTime;

  for (var i = 0; i < 130; i++) {
    noise(t + R() * 3.5, .05, 1200 + R() * 2500, .3 * (1 - i / 180));
  }

  for (var k = 0; k < 7; k++) {
    var o = AC.createOscillator();
    var g = AC.createGain();
    var s = t + .1 + R() * .9;

    o.type = 'sawtooth';
    o.frequency.setValueAtTime(500 + R() * 300, s);
    o.frequency.linearRampToValueAtTime(900 + R() * 400, s + .35);

    g.gain.setValueAtTime(.0001, s);
    g.gain.linearRampToValueAtTime(.06, s + .08);
    g.gain.linearRampToValueAtTime(.0001, s + .5);

    o.connect(g);
    g.connect(AC.destination);
    o.start(s);
    o.stop(s + .55);
  }
}

function popSnd() {
  if (!AC) return;

  if (AC.state === 'suspended') AC.resume();

  noise(AC.currentTime, .12, 900, 1.2);
  noise(AC.currentTime, .05, 3000, 1);
}

/* ---------- cake ---------- */
var CX = [100,130,160];
var blown = false;

$('cs').innerHTML = CX.map(function(x,i) {
  return '<rect x="' + (x-6) + '" y="78" width="12" height="54" rx="3" fill="' +
    (i === 1 ? '#ffd27a' : '#7fd6ff') +
    '"/><rect x="' + (x-6) + '" y="90" width="12" height="6" fill="#fff"/>' +
    '<rect x="' + (x-6) + '" y="108" width="12" height="6" fill="#fff"/>' +
    '<g class="fl"><ellipse cx="' + x +
    '" cy="64" rx="8" ry="15" fill="#ff9d00"/>' +
    '<ellipse cx="' + x +
    '" cy="68" rx="4" ry="8" fill="#fff3a0"/></g>';
}).join('');

function blow() {
  if (blown) return;

  blown = true;

  document.querySelectorAll('.fl').forEach(function(f) {
    f.style.display = 'none';
  });

  stopSong();
  applause();

  var r = $('cake').getBoundingClientRect();
  burst(r.left + 130, r.top + 60, 60, COLS, 220);
  rain(60);

  CX.forEach(function(x,ci) {
    for (var i = 0; i < 8; i++) {
      (function(i) {
        setTimeout(function() {
          var s = document.createElement('div');
          s.className = 'smoke';
          s.style.left = (x / 260 * 100) + '%';
          s.style.setProperty('--dx', (R() * 60 - 30) + 'px');

          $('cake').appendChild(s);

          setTimeout(function() {
            s.remove();
          }, 2700);
        }, i * 190 + ci * 70);
      })(i);
    }
  });

  $('cmsg').style.opacity = 1;
  unlock(2);
}

$('cake').onclick = blow;

/* ---------- balloons and wishes ---------- */
var BC = ['#ff4d6d','#4dabf7','#ffd43b','#69db7c','#da77f2','#ff922b','#38d9a9','#f06595','#74c0fc','#ffa94d'];
var got = [];
var order = [];
var run = 0;
var nt = null;

function setCount() {
  $('bcount').textContent = got.length + ' / ' + WISHES.length;
}
setCount();

function game() {
  run++;
  order = [];

  WISHES.forEach(function(_,i) {
    if (got.indexOf(i) < 0) order.push(i);
  });

  var id = run;

  setTimeout(function() {
    spawn(id);
  }, 600);
}

function spawn(id) {
  if (id !== run || cur !== 3 || !order.length) return;

  var wi = order[0];
  var W = innerWidth;
  var H = innerHeight;
  var s = Math.floor(R() * 4);
  var e = document.createElement('div');
  var done = false;
  var a, b;

  var rx = function() {
    return 20 + R() * (W - 120);
  };

  var ry = function() {
    return 70 + R() * (H - 260);
  };

  var m = {x:rx(), y:ry()};

  if (s === 0) {
    a = {x:-110,y:ry()};
    b = {x:W+30,y:ry()};
  } else if (s === 1) {
    a = {x:W+30,y:ry()};
    b = {x:-110,y:ry()};
  } else if (s === 2) {
    a = {x:rx(),y:H+30};
    b = {x:rx(),y:-170};
  } else {
    a = {x:rx(),y:-170};
    b = {x:rx(),y:H+30};
  }

  e.className = 'fb';
  e.style.setProperty('--c', BC[wi]);
  e.innerHTML = '<i></i>';
  document.body.appendChild(e);

  var T = function(p,r) {
    return 'translate(' + p.x + 'px,' + p.y + 'px) rotate(' + r + 'deg)';
  };

  var an = e.animate([
    {transform:T(a,-8)},
    {transform:T(m,8)},
    {transform:T(b,-8)}
  ], {
    duration:4500,
    easing:'linear'
  });

  var hit = function(ev) {
    if (done) return;

    done = true;

    if (ev.cancelable) ev.preventDefault();

    var pt = (ev.touches && ev.touches[0]) || ev;
    var x = pt.clientX || innerWidth / 2;
    var y = pt.clientY || innerHeight / 2;

    an.cancel();
    e.remove();

    try { popSnd(); } catch(_) {}
    try { burst(x,y,30,[BC[wi],'#fff'],120); } catch(_) {}
    try {
      if (navigator.vibrate) navigator.vibrate(25);
    } catch(_) {}

    got.push(wi);
    order.shift();

    setTimeout(function() {
      openNote(wi);
    }, 300);
  };

  e.addEventListener('pointerdown', hit);
  e.addEventListener('touchstart', hit, {passive:false});
  e.addEventListener('click', hit);

  an.onfinish = function() {
    if (done) return;

    done = true;
    e.remove();
    order.push(order.shift());

    setTimeout(function() {
      spawn(id);
    }, 300);
  };
}

function fly(cb) {
  var b = $('wbox').getBoundingClientRect();
  var d = document.createElement('div');

  d.textContent = '💌';
  d.style.cssText = 'position:fixed;z-index:60;font-s
