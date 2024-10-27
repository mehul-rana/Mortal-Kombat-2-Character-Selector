//? stage code

document.querySelector('#kahnsarena').addEventListener('click', kahnsarena)
document.querySelector('#kombattomb').addEventListener('click', kombattomb)
document.querySelector('#livingforrest').addEventListener('click', livingforrest)
document.querySelector('#thearmory').addEventListener('click', thearmory)
document.querySelector('#thedeadpool').addEventListener('click', thedeadpool)
document.querySelector('#thepit').addEventListener('click', thepit)
document.querySelector('#theportal').addEventListener('click', theportal)
document.querySelector('#thetower').addEventListener('click', thetower)
document.querySelector('#wasteland').addEventListener('click', wasteland)

//? stage functions

function kahnsarena(){
  document.querySelector('body').style.backgroundImage = "url(./stages/kahnsarena.png)"
}
function kombattomb(){
  document.querySelector('body').style.backgroundImage = "url(./stages/kombattomb.png)"
}
function livingforrest(){
  document.querySelector('body').style.backgroundImage = "url(./stages/livingforrest.png)"
}
function thearmory(){
  document.querySelector('body').style.backgroundImage = "url(./stages/thearmory.png)"
}
function thedeadpool(){
  document.querySelector('body').style.backgroundImage = "url(./stages/thedeadpool.png)"
}
function thepit(){
  document.querySelector('body').style.backgroundImage = "url(./stages/thepit.png)"
}
function theportal(){
  document.querySelector('body').style.backgroundImage = "url(./stages/theportal.png)"
}
function thetower(){
  document.querySelector('body').style.backgroundImage = "url(./stages/thetower.png)"
}
function wasteland(){
  document.querySelector('body').style.backgroundImage = "url(./stages/wasteland.png)"
}

//? Declaring player one character

const liuKang1 = document.querySelector('#liukang1')
const kungLao1 = document.querySelector('#kunglao1')
const johnnyCage1 = document.querySelector('#johnnycage1')
const reptile1 = document.querySelector('#reptile1')
const subZero1 = document.querySelector('#subzero1')
const shangTsung1 = document.querySelector('#shangtsung1')
const kitana1 = document.querySelector('#kitana1')
const j1 = document.querySelector('#j1')
const milly1 = document.querySelector('#mileena1')
const baraka1 = document.querySelector('#baraka1')
const scorpion1 = document.querySelector('#scorpion1')
const r1 = document.querySelector('#r1')

//? Declaring player two character

const liuKang2 = document.querySelector('#liukang2')
const kungLao2 = document.querySelector('#kunglao2')
const johnnyCage2 = document.querySelector('#johnnycage2')
const reptile2 = document.querySelector('#reptile2')
const subZero2 = document.querySelector('#subzero2')
const shangTsung2 = document.querySelector('#shangtsung2')
const kitana2 = document.querySelector('#kitana2')
const j2 = document.querySelector('#j2')
const milly2 = document.querySelector('#mileena2')
const baraka2 = document.querySelector('#baraka2')
const scorpion2 = document.querySelector('#scorpion2')
const r2 = document.querySelector('#r2')

//? Setting up player one event listeners

liuKang1.addEventListener('click', liu1)
kungLao1.addEventListener('click', kung1)
johnnyCage1.addEventListener('click', johnny1)
reptile1.addEventListener('click', rept1)
subZero1.addEventListener('click', subz1)
shangTsung1.addEventListener('click', shangt1)
kitana1.addEventListener('click', kita1)
j1.addEventListener('click', jaxBriggs1)
milly1.addEventListener('click', millmil1)
baraka1.addEventListener('click', barbar1)
scorpion1.addEventListener('click', scorpy1)
r1.addEventListener('click', ray1)

//? Setting up player two event listeners

liuKang2.addEventListener('click', liu2)
kungLao2.addEventListener('click', kung2)
johnnyCage2.addEventListener('click', johnny2)
reptile2.addEventListener('click', rept2)
subZero2.addEventListener('click', subz2)
shangTsung2.addEventListener('click', shangt2)
kitana2.addEventListener('click', kita2)
j2.addEventListener('click', jaxBriggs2)
milly2.addEventListener('click', millmil2)
baraka2.addEventListener('click', barbar2)
scorpion2.addEventListener('click', scorpy2)
r2.addEventListener('click', ray2)

//? Setting up player one functions

function liu1(){
  lk1.classList.toggle('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function kung1(){
  lk1.classList.add('hidden')
  kl1.classList.toggle('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function johnny1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.toggle('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function rept1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.toggle('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function subz1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.toggle('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function shangt1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.toggle('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function kita1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.toggle('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function jaxBriggs1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.toggle('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function millmil1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.toggle('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function barbar1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.toggle('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.add('hidden')
}

function scorpy1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.toggle('hidden')
  raiden1.classList.add('hidden')
}

function ray1(){
  lk1.classList.add('hidden')
  kl1.classList.add('hidden')
  jc1.classList.add('hidden')
  rep1.classList.add('hidden')
  sub1.classList.add('hidden')
  shang1.classList.add('hidden')
  kit1.classList.add('hidden')
  jax1.classList.add('hidden')
  mil1.classList.add('hidden')
  bar1.classList.add('hidden')
  scorp1.classList.add('hidden')
  raiden1.classList.toggle('hidden')
}

//? Setting up player two functions

function liu2(){
  lk2.classList.toggle('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function kung2(){
  lk2.classList.add('hidden')
  kl2.classList.toggle('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function johnny2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.toggle('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function rept2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.toggle('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function subz2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.toggle('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function shangt2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.toggle('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function kita2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.toggle('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function jaxBriggs2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.toggle('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function millmil2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.toggle('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function barbar2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.toggle('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.add('hidden')
}

function scorpy2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.toggle('hidden')
  raiden2.classList.add('hidden')
}

function ray2(){
  lk2.classList.add('hidden')
  kl2.classList.add('hidden')
  jc2.classList.add('hidden')
  rep2.classList.add('hidden')
  sub2.classList.add('hidden')
  shang2.classList.add('hidden')
  kit2.classList.add('hidden')
  jax2.classList.add('hidden')
  mil2.classList.add('hidden')
  bar2.classList.add('hidden')
  scorp2.classList.add('hidden')
  raiden2.classList.toggle('hidden')
}