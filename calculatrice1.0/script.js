var buffer = [];
var arg1 = [];
var arg2 = [];
var argNum = 1;

function addBuffer(argument) {
    buffer.push(argument);
    console.log(buffer);
}
function fillBuffer() {
    for (var i = 0; i < buffer.length; i++) {
        console.log(typeof buffer[i] + ' ' + buffer[i]);
        if (typeof buffer[i] === 'number' && argNum === 1) {
            arg1.push(buffer[i]);
        }
        else if (typeof buffer[i] === 'string') {
            argNum = 2;
            operator = buffer[i];

        }
        else { arg2.push(buffer[i]); }
    }
    var num1 = processNumber(arg1);
    var num2 = processNumber(arg2);

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    default:
            alert('Invalid');
    }
    console.log(result);
    document.getElementById('result').innerHTML = result;
    buffer = [];
    arg1 = [];
    arg2 = [];
    argNum = 1;
}
function processNumber(array) {
    var x = 1;
    var number = 0;
    for (var i = array.length - 1; i >= 0; i--) {
        number += array[i] * x;
        x *= 10;
    }
    return number;
}