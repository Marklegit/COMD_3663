//Add
const addNums = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = parseInt(num1) + parseInt(num2);
    document.getElementById("add_result").innerHTML = sum;
}; 
//Add event listener
const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", addNums);

//Multiplication
const multiNums = () => {
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let multiply = parseInt(num3) * parseInt(num4);
    document.getElementById("multiplication_result").innerHTML = multiply;
};
//Multiplication event listener
const btnMulti = document.getElementById("multiply");
btnMulti.addEventListener("click", multiNums);

//Divide
const divideNums = () => {
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    let divide = parseInt(num5) / parseInt(num6);
    document.getElementById("divide_result").innerHTML = divide;
};
//Divine event listener
const btnDivide = document.getElementById("divide");
btnDivide.addEventListener("click", divideNums);

//Divide rounding
//Remember to innerHTML = divideFixed
const roundNums = () => {
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    let round = parseInt(num7) / parseInt(num8);
	const divideFixed = round.toFixed(2);
	document.getElementById("round_result").innerHTML = divideFixed;
};
//Divine rounding event listener
const btnRound = document.getElementById("divide_round");
btnRound.addEventListener("click", roundNums);

//Subtract
const subNums = () => {
    let num9 = document.getElementById("num9").value;
    let num10 = document.getElementById("num10").value;
    let subtract = parseInt(num9) - parseInt(num10);
    document.getElementById("subtract_result").innerHTML = subtract;
};
//Subtract event listener
const btnSubtract = document.getElementById("subtract");
btnSubtract.addEventListener("click", subNums);

//Modulo
const moduloNums = () => {
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let remainder = parseInt(firstNum) % parseInt(secondNum);
    document.getElementById("remainder").innerHTML = remainder;
};
//Modulo event listener
const btnModulo = document.getElementById("modulo");
btnModulo.addEventListener("click", moduloNums);

let alertUser = () => {
	alert("CALL FUNCTION: You are in Mark's week 3 homework. Enjoy!");
}
alertUser();

//Function declaration

/*
add(3, 3);
function add(number1, number2) {
	return number1 + number2;
}

console.log(add);

subtract(3, 1);
var subtract = function (sub1, sub2) {
	return sub1 - sub2;
}
console.log(subtract);
*/

//Named function example
/*
function namedExample() {
	alert("Named function");
}
namedExample();
*/