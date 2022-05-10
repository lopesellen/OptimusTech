const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideimg')

menuIcon.addEventListener('click', function() {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
})

