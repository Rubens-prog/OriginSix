//const pessoa = {
//  nome: 'bilu',
//  age: ' 21',
//  falar: function () {
//    alert(pessoa.age);
//  },
//};
//
//pessoa.falar();

// DOM Document Object Model
//document.body.style.background = 'red'; Só um teste

const nav = document.querySelector('#header nav'); //função querySelector pega o seletor do CSS para alterar.//
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  // quando 'click', recebe function(){pega classList de nav que é o toggle e aplica o toggle}
  //para elemento of toggle faça{...} é tipo um foreach
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}
/*============================ REMOVE MENU ================================*/

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}