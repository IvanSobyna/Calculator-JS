let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const action = ['-', '+', 'x', '/'];
const out = document.querySelector("#text");

function clearAll(){
    firstNumber = '';
    secondNumber = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector("#AC").onclick = clearAll;

document.querySelector(".keyboard").onclick = function (event) {
const key = event.target.textContent;
if (numbers.includes(key)){
    if (secondNumber === '' && sign === ''){
        firstNumber += key;
        out.textContent = firstNumber;
    }
    else if (firstNumber!== '' && secondNumber!== '' && finish){

    }
    else {
        secondNumber += key;
        out.textContent = secondNumber;
    }
    return;
}
if (action.includes(key)){
    sign = key;
    out.textContent = sign;
    return;
}

if (key === '='){
    if (secondNumber === '') secondNumber = firstNumber;
    switch (sign){
        case "+":
            firstNumber = (+firstNumber) + (+secondNumber);
            break;
        case "-":
            firstNumber = firstNumber - secondNumber;
            break;
        case "x":
            firstNumber = firstNumber * secondNumber;
            break;
        case "/":
            firstNumber = firstNumber / secondNumber;
            break;
    }
    finish = true;
    out.textContent = firstNumber;
}
}
