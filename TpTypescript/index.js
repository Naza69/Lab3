"use strict";
// Ejercicio 2
console.log("Hola desde Typescript");
// Ejercicio 3
let containerOne = document.getElementById("containerEj3");
function fill(text, num, bool, date, div) {
    div.innerHTML = `
    <p>Texto: ${text}</p>
    <p>Numero: ${num}</p>
    <p>Booleano: ${bool}</p>
    <p>Fecha: ${date}</p>
    `;
}
let someDate = new Date();
fill("Hola desde typescript", 1234, false, someDate, containerOne);
// Ejercicio 4
function numToString(num) {
    let stringNumber;
    stringNumber = num.toString();
    return stringNumber;
}
let contianerTwo = document.getElementById("containerEj4");
let someNumber = 1234;
let someStringNumber = numToString(someNumber);
contianerTwo.innerHTML = `
    <p>Numero convertido a cadena ${someNumber}</p>
`;
// Ejercicio 5
let arrayNumbers = [1, 2, 3, 4];
function arraySummatory(array) {
    let summatory = 0;
    for (let i = 0; i < array.length; i++) {
        summatory = summatory + array[i];
    }
    return summatory;
}
let res = arraySummatory(arrayNumbers);
let containerThree = document.getElementById("containerEj5");
containerThree.innerHTML = `
    <p>Suma de la array: ${res}</p>
`;
let person = {
    name: "Juan",
    age: 30,
    asignment: "Matematicas"
};
let containerFour = document.getElementById("containerEj6");
if (containerFour) {
    console.log("Contenedor de ejercicio 6 cargado!");
    containerFour.innerHTML = `
    <p>Nombre: ${person.name}</p>
    <p>Edad: ${person.age}</p>
    <p>Curso: ${person.asignment}</p>
    `;
}
else
    console.log("Contenedor de ejercicio 6 no encontrado");
let adress = {
    street: "Grove Street",
    city: "Los Santos",
    postalCode: 964545
};
let containerFive = document.getElementById("containerEj7");
containerFive.innerHTML = `
    <p>Direccion: Calle: ${adress.street}, Ciudad: ${adress.city}, CP: ${adress.postalCode}</p>
    `;
let user = {
    name: "Naza",
    mail: "fiorettinazareno@gmail.com",
    gretting() {
        let containerToFill = document.getElementById("containerEj8");
        if (containerToFill) {
            containerToFill.innerHTML = `
            <p>Hola loco, mi nombre es ${this.name}</p>
            `;
        }
        else
            console.log("No hay contenedor donde pueda saludarte (Atte: " + this.name + ") (Metodo gretting del objeto person)");
    }
};
user.gretting();
let personTwo = {
    name: "Sergio",
    age: 52,
    presentation() {
        let containerSix = document.getElementById("containerEj9");
        if (containerSix) {
            containerSix.innerHTML = `
            <p>Hola, mi nombre es ${this.name} y tengo ${this.age} años.</p>
            `;
        }
        else
            console.log("No puedo presentarme porque no hay un contenedor que me lo permita, atte: ", this.name + " (Metodo presentation del objeto personTwo)");
    }
};
personTwo.presentation();
// Ejercicio 10
class box {
    constructor(value) {
        this.value = value;
    }
    showValue() {
        let containerSeven = document.getElementById("containerEj10");
        let newContent = "";
        if (containerSeven) {
            if (typeof this.value == "string") {
                newContent = `
                <p>Contenido de cajaTexto: ${this.value}</p>
                `;
            }
            else if (typeof this.value == "number") {
                newContent = `
                <p>Contenido de cajaNumero: ${this.value}</p>
                `;
            }
            else if (typeof this.value == "boolean") {
                newContent = `
                <p>Contenido de cajaBool: ${this.value}</p>
                `;
            }
            else {
                console.log("No parece que pueda mostrar mucho, solo se permiten los tipos de datos bool, number y string");
                return;
            }
            containerSeven.insertAdjacentHTML("beforeend", newContent);
        }
        else
            console.log("No hay forma de mostrar nada debido a que el contenedor de la pagina no parece existir. (Metodo showValue de la clase box)");
    }
}
let boxOne = new box("Hola muy wenas");
let boxTwo = new box(20);
let boxThree = new box(true);
boxOne.showValue();
boxTwo.showValue();
boxThree.showValue();
// Ejercicio 11
function identity(parameter) {
    let containerEight = document.getElementById("containerEj11");
    let newContent = "";
    if (containerEight) {
        if (typeof parameter == "string") {
            newContent = `
            <p>Identidad del texto: ${parameter}</p>
            `;
        }
        else if (typeof parameter == "number") {
            newContent = `
            <p>Identidad del numero: ${parameter}</p>
            `;
        }
        else if (typeof parameter == "boolean") {
            newContent = `
            <p>Identidad del booleano: ${parameter}</p>
            `;
        }
        else
            console.log("Otros tipos de datos no son aceptados, asegurese que sea number, string o boolean.");
        containerEight.insertAdjacentHTML("beforeend", newContent);
    }
    else
        console.log("No existe un contenedor en la pagina al cual asignarle el valor pasado. (Funcion identidad)");
}
identity(20);
identity("HOLAAAAAAAAA =U");
identity(true);
// Ejercicio 12
var Color;
(function (Color) {
    Color["blue"] = "azul";
    Color["red"] = "rojo";
    Color["purple"] = "morado";
    Color["green"] = "verde";
    Color["yellow"] = "amarillo";
    Color["orange"] = "naranja";
})(Color || (Color = {}));
let colorFav = Color.green;
let containerNine = document.getElementById("containerEj12");
if (containerNine) {
    containerNine.innerHTML = `
    <p>Color favorito: ${colorFav}</p>
    `;
}
else
    console.log("No hay forma de mostrar nada dado que el contenedor de la pagina para asignar no parece existir (Ejercicio de enum Color).");
