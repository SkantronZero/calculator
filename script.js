/*
Initialization
*/

let calculator_display_inner_text = document.getElementById("calculator_display_inner_text");
calculator_display_inner_text.textContent = '102150';
let AC_button = document.getElementById("AC_button");




let seven_button = document.getElementById("seven_button");

seven_button.addEventListener("click", updateDisplay);

/*

Functions

*/

function updateDisplay(){
    calculator_display_inner_text.textContent = "hello world";
}
