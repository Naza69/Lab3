"use strict";
console.log("Hola desde typescript");
//Ejercicio 1
class car {
    constructor(model, velocity = 0, brand) {
        this.velocity = 0;
        this.model = model;
        this.velocity = velocity;
        this.brand = brand;
    }
    accelerate(velocity) {
        this.velocity += 10;
    }
    brake(velocity) {
        this.velocity -= 10;
    }
    actualStatus(velocity, model, brand) {
        console.log(`Velocidad: ${velocity}/n
            Modelo: ${model}/n
            Marca: ${brand}`);
    }
}
//Ejercicio 2 
/**
 *
 *
async function fetchTasks() {
    
res: Response = fetch('https://jsonplaceholder.typicode.com/todos/1').then
}
*/
let response = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(r => r.json())
    .then(data => {
    data.forEach((element) => {
        if (element.completed = true) {
            console.log(element);
        }
    });
}).catch();
//Ejercicio 3
//Se puede hacer intercalando con un innerhtml la clase asignada de un elemento html
