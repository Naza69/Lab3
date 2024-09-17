
// Ejercicio 2
console.log("Hola desde Typescript")

// Ejercicio 3
let containerOne: HTMLElement = document.getElementById("containerEj3")!

function fill(text: string, num: number, bool:boolean, date: Date, div:HTMLElement): void{
    div.innerHTML = `
    <p>Texto: ${text}</p>
    <p>Numero: ${num}</p>
    <p>Booleano: ${bool}</p>
    <p>Fecha: ${date}</p>
    `

}

let someDate = new Date()

fill("Hola desde typescript", 1234, false, someDate, containerOne)

// Ejercicio 4

function numToString(num: number){
    let stringNumber:String
    stringNumber = num.toString()
    return stringNumber
}

let contianerTwo:HTMLElement = document.getElementById("containerEj4")!

let someNumber:number = 1234

let someStringNumber: String = numToString(someNumber)

contianerTwo.innerHTML = `
    <p>Numero convertido a cadena ${someNumber}</p>
`

// Ejercicio 5

let arrayNumbers:number[] = [1, 2, 3, 4]

function arraySummatory(array:number[]) {
    
    let summatory: number = 0
    
    for(let i = 0; i < array.length; i++){
        summatory = summatory+array[i]
    }
    return summatory
}

let res = arraySummatory(arrayNumbers)

let containerThree:HTMLElement = document.getElementById("containerEj5")!

containerThree.innerHTML = `
    <p>Suma de la array: ${res}</p>
`

// Ejercicio 6

// Tipo de objeto con propiedades dinamicas
interface Person {
    [key: string]: string | number | string
}

let person: Person = {
    name: "Juan",
    age: 30,
    asignment: "Matematicas"
}

let containerFour: HTMLElement | null = document.getElementById("containerEj6")

if (containerFour) {
    console.log("Contenedor de ejercicio 6 cargado!")
    containerFour.innerHTML = `
    <p>Nombre: ${person.name}</p>
    <p>Edad: ${person.age}</p>
    <p>Curso: ${person.asignment}</p>
    `
} else console.log("Contenedor de ejercicio 6 no encontrado")

// Ejercicio 7

type Adress = {
    street: string,
    city: string,
    postalCode: number
}

let adress: Adress = {
    street: "Grove Street",
    city: "Los Santos",
    postalCode: 964545
}

let containerFive = document.getElementById("containerEj7") as HTMLElement

containerFive.innerHTML = `
    <p>Direccion: Calle: ${adress.street}, Ciudad: ${adress.city}, CP: ${adress.postalCode}</p>
    `

// Ejercicio 8

interface User {
    name: string,
    mail: string,
    gretting():void
}

let user: User = {
    name: "Naza",
    mail: "fiorettinazareno@gmail.com",

    gretting(): void {
        let containerToFill = document.getElementById("containerEj8")! 
        if (containerToFill) {
            containerToFill.innerHTML = `
            <p>Hola loco, mi nombre es ${this.name}</p>
            `
        } else console.log("No hay contenedor donde pueda saludarte (Atte: "+this.name+") (Metodo gretting del objeto person)")
    }
}

user.gretting()

// Ejercicio 9

interface PersonTwo {
    name: string,
    age: number,

    presentation():void
}

let personTwo: PersonTwo = {
    name: "Sergio",
    age: 52,

    presentation() {
        let containerSix: HTMLElement | any = document.getElementById("containerEj9")

        if (containerSix) {
            containerSix.innerHTML = `
            <p>Hola, mi nombre es ${this.name} y tengo ${this.age} años.</p>
            `
        } else console.log("No puedo presentarme porque no hay un contenedor que me lo permita, atte: ", this.name+" (Metodo presentation del objeto personTwo)")
    }
}

personTwo.presentation()

// Ejercicio 10

class box {

    value: any

    constructor (value: any){
        this.value = value
    }

    showValue():void {
        let containerSeven = document.getElementById("containerEj10")!
        let newContent = ""
        if(containerSeven) {
            if(typeof this.value == "string"){
                newContent = `
                <p>Contenido de cajaTexto: ${this.value}</p>
                `
            } else if(typeof this.value == "number") {
                newContent = `
                <p>Contenido de cajaNumero: ${this.value}</p>
                `
            } else if(typeof this.value == "boolean") {
                newContent = `
                <p>Contenido de cajaBool: ${this.value}</p>
                `
            } else {
                console.log("No parece que pueda mostrar mucho, solo se permiten los tipos de datos bool, number y string")
                return;
            }
            containerSeven.insertAdjacentHTML("beforeend", newContent)

        } else console.log("No hay forma de mostrar nada debido a que el contenedor de la pagina no parece existir. (Metodo showValue de la clase box)")
    }
}

let boxOne = new box("Hola muy wenas")
let boxTwo = new box(20)
let boxThree = new box(true)

boxOne.showValue()
boxTwo.showValue()
boxThree.showValue()

// Ejercicio 11

function identity<T>(parameter: T):void {
    
    let containerEight: HTMLElement | any = document.getElementById("containerEj11")
    let newContent = ""
    if(containerEight){
        if(typeof parameter == "string") {
            newContent = `
            <p>Identidad del texto: ${parameter}</p>
            `
        } else if (typeof parameter == "number") {
            newContent = `
            <p>Identidad del numero: ${parameter}</p>
            `
        } else if(typeof parameter == "boolean"){
            newContent = `
            <p>Identidad del booleano: ${parameter}</p>
            `
        } else console.log("Otros tipos de datos no son aceptados, asegurese que sea number, string o boolean.")
        
        containerEight.insertAdjacentHTML("beforeend", newContent)
    } else console.log("No existe un contenedor en la pagina al cual asignarle el valor pasado. (Funcion identidad)")
}

identity(20)
identity("HOLAAAAAAAAA =U")
identity(true)

// Ejercicio 12

enum Color {
    blue = "azul",
    red = "rojo",
    purple = "morado",
    green = "verde",
    yellow = "amarillo",
    orange = "naranja"
}

let colorFav: Color = Color.green

let containerNine = document.getElementById("containerEj12")!

if(containerNine){
    containerNine.innerHTML = `
    <p>Color favorito: ${colorFav}</p>
    `
} else console.log("No hay forma de mostrar nada dado que el contenedor de la pagina para asignar no parece existir (Ejercicio de enum Color).")



