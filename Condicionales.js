const num1 = 10;
const num2 = 20;
const num3 = 30;

console.log(`Numeros: ${num1}, ${num2}, ${num3}`);

console.log(`El número más grande es: ${Math.max(num1, num2, num3)}`);

console.log(`El número más pequeño es: ${Math.min(num1, num2, num3)}`);

if (num1 % 2 == 0) {
    console.log(`${num1} es par`);
} else {
    console.log(`${num1} es impar`);
}

if (num2 % 2 == 0) {
    console.log(`${num2} es par`);
} else {    
    console.log(`${num2} es impar`);
}

if (num3 % 2 == 0) {
    console.log(`${num3} es par`);
} else {
    console.log(`${num3} es impar`);
}

if (num1 % 5 == 0) {
    console.log(`${num1} es múltiplo de 5`);
}

if (num2 % 5 == 0) {
    console.log(`${num2} es múltiplo de 5`);
}

if (num3 % 5 == 0) {
    console.log(`${num3} es múltiplo de 5`);
}