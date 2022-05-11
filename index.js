const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideimg')

menuIcon.addEventListener('click', function() {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
})


// scroll 
function scrollTo(element) {
  document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

  document.querySelector("#vagas").addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(".vagas");
});

function scrollTo(element) {
  document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

  document.querySelector("#depoimentos").addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(".secao-dep");
});

function scrollTo(element) {
  document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

  document.querySelector("#enjoy").addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(".formulario");
});