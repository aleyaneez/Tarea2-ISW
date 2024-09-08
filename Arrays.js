array = [1, 2, 3, 4, 5]; // 15

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(`La suma del array es: ${sumArray(array)}`);

const promArray = (arr) => {
    return sumArray(arr) / arr.length;
};

console.log(`El promedio del array es: ${promArray(array)}`);

stringsArray = ['chile','campeón','de','américa'];

const mayArrays = (arr) => {
    let nuevo = [];
    for (let i = 0; i < arr.length; i++) {
        nuevo.push(arr[i].toUpperCase());
    }
    return nuevo;
};

console.log(`Array de strings en mayúsculas: ${mayArrays(stringsArray)}`);

const paresArray = (arr) => {
    let nuevo = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            nuevo.push(arr[i]);
        }
    }
    return nuevo;
};

console.log(`Pares en el array: ${paresArray(array)}`);
