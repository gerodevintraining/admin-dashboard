const main = document.querySelector("main");
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector("aside");

main.onscroll = function() {scrollFunction()};
hamburger.onclick = function(e) {
    aside.classList.add("show-sidebar");
}

document.onclick = function(e) {
    if (!hamburger.contains(e.target)) {
        aside.classList.remove("show-sidebar");
    }
}

window.onresize = function() {
    if (window.innerWidth < 1375 && aside.classList.contains("show-sidebar")) {
        aside.classList.remove("show-sidebar");
    }
}

function scrollFunction() {
    if (document.querySelector("main").scrollTop > 50) {
        header.classList.add("minimize-header");
    } else {
        header.classList.remove("minimize-header");
    }
}