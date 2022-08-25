let docInput = document.querySelector("#bill");
let factInput = document.querySelector("#people");
let numberOutput = document.querySelector("#tip-per-person");
let percentOutput = document.querySelector("#total-per-person");
let reset = document.querySelector("#reset");

let redColorNum = document.getElementById("tip-per-person");
let redColorPerc = document.getElementById("total-per-person");



// let docValue;
// let factValue;
// let x;
// let y;

function docInputFn(){
    docValue = docInput.value;
    console.log(docValue);
}

function factInputFn(){
    factValue = factInput.value;
    console.log(factValue);
    x = +docValue - +factValue;
    y = x / +docValue * 100;
    if (y > 0.5){
        redColorNum.style.color = "red";
        redColorPerc.style.color = "red";
    }    
    numberOutput.innerText = x + "kg";
    percentOutput.innerText = y.toFixed(2) + "%";
}

function resetFn(){
    docInput.value= "";
    factInput.value = "";
    numberOutput.innerText = "0.00";
    percentOutput.innerText = "0.00";
    redColorNum.style.color = "#26C2AE";
    redColorPerc.style.color = "#26C2AE";
}



docInput.addEventListener("input", docInputFn);
factInput.addEventListener("focusout", factInputFn);
reset.addEventListener("click", resetFn);
            
