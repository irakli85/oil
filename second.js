let text = document.querySelectorAll(".sec-page-text");
let option = document.querySelectorAll("option");
let select = document.getElementById("product-select");
let value = select.options;
let x = 0;
let benzini = document.querySelector("#benzini");
let nedli = document.querySelector("#nedli");
let dizeli = document.querySelector("#dizeli");
let navti = document.querySelector("#navti");
let mazuti = document.querySelector("#mazuti");
let zeti = document.querySelector("#zeti");
let benzoli = document.querySelector("#benzoli");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");
// let benzini = document.querySelector("#benzini");


function getValue(){
    x = value.selectedIndex;

    if (x == 1){ 

        benzini.classList.remove("sec-page-text");        
    }else if(x == 2){
        nedli.classList.remove("sec-page-text");
    }else if(x == 3){
        dizeli.classList.remove("sec-page-text");
    }else if(x == 4){
        navti.classList.remove("sec-page-text");
    }else if(x == 5){
        mazuti.classList.remove("sec-page-text");
    }else if(x == 6){
        zeti.classList.remove("sec-page-text");
    }else if(x == 7){
        benzoli.classList.remove("sec-page-text");
    }else if(x == 8){
        text.innerText = "8";
    }else if(x == 9){
        text.innerText = "9";
    }else if(x == 10){
        text.innerText = "10";
    }else if(x == 11){
        text.innerText = "11";
    }else if(x == 12){
        text.innerText = "12";
    }else if(x == 13){
        text.innerText = "13";
    }else if(x == 14){
        text.innerText = "14";
    }else if(x == 15){
        text.innerText = "15";
    }

}
    select.addEventListener("change", getValue);
function classListCheck(){
    if (text.classList.contains("sec-page-text")){

    }
}