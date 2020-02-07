//Add
const addNums = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = parseInt(num1) + parseInt(num2);
    document.getElementById("add_result").innerHTML = sum;
};
//Multiplication
const multiNums = () => {
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let multiply = parseInt(num3) * parseInt(num4);
    document.getElementById("multiplication_result").innerHTML = multiply;
};
//Divide
const divideNums = () => {
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    let divide = parseInt(num5) / parseInt(num6);
    document.getElementById("divide_result").innerHTML = divide;
};
//Divide rounding
const roundNums = () => {
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    let round = parseInt(num7) / parseInt(num8);
	const divideFixed = round.toFixed(2);
	document.getElementById("round_result").innerHTML = divideFixed;
};
//Subtract
const subNums = () => {
    let num9 = document.getElementById("num9").value;
    let num10 = document.getElementById("num10").value;
    let subtract = parseInt(num9) - parseInt(num10);
    document.getElementById("subtract_result").innerHTML = subtract;
};

//Modulo
const moduloNums = () => {
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let remainder = parseInt(firstNum) % parseInt(secondNum);
    document.getElementById("remainder").innerHTML = remainder;
};
