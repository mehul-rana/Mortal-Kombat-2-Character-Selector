//? stage code
document.querySelector('#kahnsarena').addEventListener('click', kahnsarena)

function kahnsarena(){
  document.querySelector('body').style.backgroundImage = "url(./stages/kahnsarena.png)"
}

// const lk1 = document.querySelector('#lk1')
// document.querySelector('#lk1').addEventListener('click', liuk1)

//? Declaring player one character

const liuKang1 = document.querySelector('#liukang1')
const kungLao1 = document.querySelector('#kunglao1')
const johnnyCage1 = document.querySelector('#johnnycage1')
const reptile1 = document.querySelector('#reptile1')
const subZero1 = document.querySelector('#subzero1')
const shangTsung1 = document.querySelector('#shantsung1')
const kitana1 = document.querySelector('#kitana1')
const j1 = document.querySelector('#j1')
const milly1 = document.querySelector('#mileena1')
const baraka1 = document.querySelector('#baraka1')
const scorpion1 = document.querySelector('#scorpion1')
const r1 = document.querySelector('#r1')

//? Declaring player two character



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


//? Setting up player one functions

function liu1(){
  // !toggle hidden class
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