const hamburger = document.querySelector('.hamburger__js')

hamburger.addEventListener('click', ()=>{
   const navigation=document.querySelector('.navigation__js')
   navigation.classList.toggle('navigation__open')
})