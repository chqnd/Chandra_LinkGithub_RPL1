let operator = prompt("(+, -, *, /)");
let num1 = parseFloat(prompt("Angka 1"));
let num2 = parseFloat(prompt("Angka 2"));

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2; 
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") { 
    result = num1 / num2;
} else {
    alert("Operator tidak valid");
}

if (result !== undefined) {
    document.write("Hasil: " + result); 
}
