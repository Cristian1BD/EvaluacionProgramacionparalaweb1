const numeros = [5, 8, 12, 15, 2, 4, 18, 21];

const multiplicados = numeros.map(num => num * 2);

const filtrados = multiplicados.filter(num => num > 10);

const suma = filtrados.reduce((acc, num) => acc + num, 0);

console.log(suma);

// respuesta 148