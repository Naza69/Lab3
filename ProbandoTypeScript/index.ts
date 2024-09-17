console.log("Hola desde typescript")

//Ejercicio 1
class car {
    
    model: string 
    velocity: number = 0
    brand: string

    constructor (model: string, velocity: number = 0, brand: string){
        this.model = model;
        this.velocity = velocity;
        this.brand = brand;
    }

    accelerate(velocity: number) {
        this.velocity += 10
    }

    brake(velocity: number){
        this.velocity -= 10
    }

    actualStatus(velocity: number, model: string, brand: string){
        console.log(`Velocidad: ${velocity}/n
            Modelo: ${model}/n
            Marca: ${brand}`
        );
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
    data.forEach((element:elem) => {
        
        if(element.completed = true){
            console.log(element)
        }

    });    
}).catch()

interface elem {
    userId: number
    id: number
    title: string
    completed: boolean

}

//Ejercicio 3
//Se puede hacer intercalando con un innerhtml la clase asignada de un elemento html

