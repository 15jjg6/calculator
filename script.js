function add (a, b) {
	return a + b;	
}

function subtract (a, b) {
	return a - b;
}

function multiply (a, b) {
	return a * b; 
}

function divide(numerator, divisor) {
    return divisor !== 0 ? numerator / divisor : 'Error';
}

function operate(a, b, operator) { 
    return operator(a, b)
    // on operation should set display to new value and should clear 
    // old values.

}


let displayValue = document.querySelector('#display');