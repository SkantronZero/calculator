/*
Initialization


*/

const audio = new Audio()

let bmMode = false;
let bmModeRegEx = '[1-5]';
let nextOperationFlag = false;
let numRegEx = '[0-9.]';
let periodRegEx = '[.]';
let inputNumbers = ['1','1'];

let calculator_button_container_left_class = document.getElementsByClassName("calculator_button_container_left_class");

let calculator_display_inner_text = document.getElementById("calculator_display_inner_text");
calculator_display_inner_text.textContent = '';
let AC_button = document.getElementById("AC_button");
let plus_minus_button = document.getElementById("plus_minus_button");
let back_button = document.getElementById("back_button");
let divide_button = document.getElementById("divide_button");
let multiply_button = document.getElementById("multiply_button");
let minus_button = document.getElementById("minus_button");
let add_button = document.getElementById("add_button");
let equal_button = document.getElementById("equal_button");
let zero_button = document.getElementById("zero_button");
let one_button = document.getElementById("one_button");
let two_button = document.getElementById("two_button");
let three_button = document.getElementById("three_button");
let four_button = document.getElementById("four_button");
let five_button = document.getElementById("five_button");
let six_button = document.getElementById("six_button");
let seven_button = document.getElementById("seven_button");
let eight_button = document.getElementById("eight_button");
let nine_button = document.getElementById("nine_button");
let period_button = document.getElementById("period_button");


zero_button.addEventListener("click", buttonConversion);
one_button.addEventListener("click", buttonConversion);
two_button.addEventListener("click", buttonConversion);
three_button.addEventListener("click", buttonConversion);
four_button.addEventListener("click", buttonConversion);
five_button.addEventListener("click", buttonConversion);
six_button.addEventListener("click", buttonConversion);
seven_button.addEventListener("click", buttonConversion);
eight_button.addEventListener("click", buttonConversion);
nine_button.addEventListener("click", buttonConversion);
AC_button.addEventListener("click", buttonConversion);
plus_minus_button.addEventListener("click", buttonConversion);
divide_button.addEventListener("click", buttonConversion);
multiply_button.addEventListener("click", buttonConversion);
minus_button.addEventListener("click", buttonConversion);
add_button.addEventListener("click", buttonConversion);
equal_button.addEventListener("click", buttonConversion);
period_button.addEventListener("click", buttonConversion);
back_button.addEventListener("click", buttonConversion);




/*

Functions

*/

// function buttonConversion2(e){
//     console.log(String(e.target.textContent));
// }

function play(e) {
    console.log(e);
    var audio = document.getElementById('audio'+e);
    audio.play();
  }

function buttonConversion(e){
    console.log((String(e.target.textContent)));
    let pressed_button = (String(e.target.textContent));
    inputCollection(e);
}

function inputCollection(event){
    console.log(event);
    // console.log(event.key);

    if(nextOperationFlag){
        clearCollectionAndDisplay();
        nextOperationFlag = false;
    }
    
    let input = '';

    // convert key press event to String of key pressed
    if(event.type == "keydown"){
        input = event.key;
        console.log("key input is: "+input);
    }
    
    // convert button click event to String of button clicked
    if(event.type == "click"){
        input = event.target.textContent;
        console.log("button input is: "+input);
    }

    // bop
    if(bmMode){
        if(input.match(bmModeRegEx)){
            play(input);
        }
        
    }

    if(input == 'Backspace' || event.target.id == 'back_button'){
        let str = calculator_display_inner_text.textContent;
        str = str.slice(0, -1);
        calculator_display_inner_text.textContent = str;
    }

    console.log(/[.]/.test(calculator_display_inner_text.textContent));

    if(input == '.' && (/[.]/.test(calculator_display_inner_text.textContent) == true)){
        console.log("multiple periods entered");
        return;
    }

    if(typeof(input) === 'string' && input.match(numRegEx)){
        calculator_display_inner_text.textContent += input;
    }

    if(input == 'Delete'){
        clearCollectionAndDisplay();
    }

    


    if(input == 'x' || input == '*'){
        inputNumbers.unshift(calculator_display_inner_text.textContent);
        inputNumbers.pop();
        nextOperationFlag = true;
        console.log('multiply');
        console.log(inputNumbers);
    }
    if(input == '/'){
        console.log('divide');
    }
    if(input == '%'){
        console.log('back');
    }
    if(input == '-'){
        console.log('subtract');
    }
    if(input == '+'){
        console.log('add');

    }
    if(input == '=' || input == 'Enter'){
        if(calculator_display_inner_text.textContent = '12345'){
            // calculator_display_inner_text.style.fontSize = '16px';
            // calculator_display_inner_text.textContent = 'Brian McKnight Mode Activated';
            // calculator_display_inner_text.style.fontSize = '32px';
            bmMode = true;
            alert('Brian McKnight Mode Activated');
        }
        console.log('equals');
    }
}

function clearCollectionAndDisplay(){

    calculator_display_inner_text.textContent = '';

}

function evaluate(x, op, y){
    // calculator_display_inner_text.textContent = 
}




/*

Execution

*/

window.addEventListener('keydown', inputCollection);
AC_button.addEventListener('click', clearCollectionAndDisplay);

