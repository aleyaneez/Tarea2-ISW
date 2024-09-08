console.log('Números del 1 al 10:');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('Números del 10 al 1:');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('Números pares del 1 al 10:');
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log('Números impares del 1 al 10:');
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log('Números múltiplos de 3 del 1 al 10:');
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log('Números múltiplos de 5 del 1 al 10:');
for (let i = 1; i <= 10; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}

console.log('Números múltiplos de 3 y 5 del 1 al 10:');
contador = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        contador++;
        console.log(i);
    }
}
if (contador == 0) {
    console.log('No hay números múltiplos de 3 y 5 del 1 al 10');
}

console.log('Números múltiplos de 3 o 5 del 1 al 10:');
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
    }
}