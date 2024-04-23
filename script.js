/*
Initialization
*/
let numRegEx = '[0-9.]';

let calculator_display_inner_text = document.getElementById("calculator_display_inner_text");
calculator_display_inner_text.textContent = '';
let AC_button = document.getElementById("AC_button");


/*

Functions

*/

function inputCollection(event){
    console.log(event.key);
    if(event.key == 'Backspace'){
        let str = calculator_display_inner_text.textContent;
        str = str.slice(0, -1);
        calculator_display_inner_text.textContent = str;
    }
    if(typeof(event.key) === 'string' && event.key.match(numRegEx)){
        calculator_display_inner_text.textContent += event.key;
    }
    if(event.key == 'Delete'){
        clearCollectionAndDisplay();
    }
    if(event.key == 'x' || event.key == '*'){
        console.log('multiply');
    }
    if(event.key == '/'){
        console.log('divide');
    }
    if(event.key == '%'){
        console.log('remainder');
    }
    if(event.key == '-'){
        console.log('subtract');
    }
    if(event.key == '+'){
        console.log('add');

    }
    if(event.key == '=' || event.key == 'Enter'){
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

