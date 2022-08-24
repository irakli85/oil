let docInput = document.querySelector("#bill");
let factInput = document.querySelector("#people");
let numberOutput = document.querySelector("#tip-per-person");
let percentOutput = document.querySelector("#total-per-person");
let reset = document.querySelector("#reset");



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
    numberOutput.innerText = x + "kg";
    percentOutput.innerText = y.toFixed(2) + "%";
}

function resetFn(){
    docInput.value= "";
    factInput.value = "";
    numberOutput.innerText = "0.00";
    percentOutput.innerText = "0.00";
}



docInput.addEventListener("input", docInputFn);
factInput.addEventListener("input", factInputFn);
reset.addEventListener("click", resetFn);
            
