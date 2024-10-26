// stage code
document.querySelector('#kahnsarena').addEventListener('click', kahnsarena)

function kahnsarena(){
  document.querySelector('body').style.backgroundImage = "url(./stages/kahnsarena.png)"
}

// const lk1 = document.querySelector('#lk1')
// document.querySelector('#lk1').addEventListener('click', liuk1)


const liuKang1 = document.querySelector('#liukang1')
const kungLao1 = document.querySelector('#kunglao1')
const johnnyCage1 = document.querySelector('#johnnycage1')

liuKang1.addEventListener('click', liu1)
kungLao1.addEventListener('click', kung1)

function liu1(){
  // !toggle hidden class
  lk1.classList.toggle('hidden')
  kl1.classList.add('hidden')
}

function kung1(){
  kl1.classList.toggle('hidden')
  lk1.classList.add('hidden')
}