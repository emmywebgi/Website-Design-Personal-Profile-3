const txtSearch = document.querySelector(".txt-search");
const btnSearch = document.querySelector(".fa-search");
const linea1 = document.querySelector(".l1");
const linea2 = document.querySelector(".l2");
const linea3 = document.querySelector(".l3");
const menu = document.querySelector("ul");
const btnmenu = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav");

btnSearch.onclick = function(){
    txtSearch.classList.toggle("txt-search-w");
}

btnmenu.onclick = function(){
    menu.classList.toggle("mostrar");
    linea1.classList.toggle("rotatel1");
    linea2.classList.toggle("scalel2");
    linea3.classList.toggle("rotatel3");
    nav.classList.toggle("mostrarnav");
}