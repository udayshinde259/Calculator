let display = document.querySelector("#display");
let buttons = document.querySelector(".buttons");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculateResult(){
    try{
        display.value = eval(display.value) ;
    }
    catch(error){
        display.value = "Error";
    }
}
