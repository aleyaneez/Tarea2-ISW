const num1 = 15;
const num2 = 20;
const num3 = '25';

if (num1 >= num2) {
    console.log(`${num1} es mayor o igual a ${num2}`);
}

if (num1 <= num2) {
    console.log(`${num1} es menor o igual a ${num2}`);
}

if (num1 < num3) {
    console.log(`${num1} es menor a ${num3}`);
}

if (num3 < num2) {
    console.log(`${num3} es menor a ${num2}`);
}

if (num3 !== num1) {
    console.log(`${num3} es extrictamente diferente a ${num1}`);
}

if (num1 === num2) {
    console.log(`${num1} es extrictamente igual a ${num3}`);
}