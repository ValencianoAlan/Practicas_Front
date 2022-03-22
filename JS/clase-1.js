/* Variables */
console.log("\n***** Variables *****");
var num1;
num1 = 4;
var num2;
num2 = 6;
var res = num1 + num2;

console.log(num1 + " + " + num2 + " = " + res);
console.log("\n***** Cadenas *****");
/* Cadenas */
var frase1;
var frase2;
var frase3;

frase1 = "Ejemplo de comillas dobles";
frase2 = "Ejemplo de comillas simples";
frase3 = `Ejemplo de comillas ${num2} invertidas`;

console.log(frase1);
console.log(frase2);
console.log(frase3);

console.log("\n***** Condicionales *****");
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);

console.log("\n***** Op Logicos AND y OR *****");

console.log(true && false);
console.log(true || false);

console.log("\n***** Arreglos - Vectores *****");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[2]);
console.log(listaDeNumeros.length + " numeros ingresados");

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);

let listaDePalabras = ["Explorers", "Mision Commander", "Innovaccion"];
console.log(listaDePalabras);

let palabra = "Explorers";
console.log(palabra[4]);
console.log(palabra.length);

console.log("\n***** Objetos *****");
let explorer = {
  name: "alan",
  email: "email@innovaccion.mx",
  numReg: 2345,
  mision: "Frontend",
  proyecto: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"],
  proPer: {
      escolar: 'Tareas',
      profesional: 'Trabajo',
      peronal: 'Negocios'
  }
};

console.log(explorer);
console.log(explorer.email);
console.log(explorer.proyecto);
console.log(explorer.proPer);