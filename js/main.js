AOS.init();

let elBtnSh1 = document.querySelector(".bsh1");
let elBtnR1 = document.querySelector(".br1");
let elCpo = document.querySelector(".cpo_depart");

elBtnSh1.addEventListener("click", function(evt){
    evt.preventDefault();
    elCpo.style.display = "flex";
})

elBtnR1.addEventListener("click", function(evt){
    evt.preventDefault();
    elCpo.style.display = "none";
})

let elBtnSh2 = document.querySelector(".bsh2");
let elBtnR2 = document.querySelector(".br2");
let elCfo = document.querySelector(".cfo_depart");

elBtnSh2.addEventListener("click", function(evt){
    evt.preventDefault();
    elCfo.style.display = "flex";
})

elBtnR2.addEventListener("click", function(evt){
    evt.preventDefault();
    elCfo.style.display = "none";
})


