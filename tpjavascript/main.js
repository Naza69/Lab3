
//Introducción
//Ejercicio 2
//{
//let a = 5
//let b = 10
//let c = a + b
//console.log("La suma de a y b es: "+c)
//}

//Ejercicio 3
//let name = prompt("Introduci tu nombre: ")
//console.log("Hola "+name+"!")

//Operadores logicos y condicionales
//Ejercicio 1

//{
//let a = 6
//let b = 7
//let c = 6
//
//  if (a>b & a>c) {
//    console.log("El mayor de los tres es a que vale: "+a)
//  } else if (b>4 & b>c) {
//  console.log("El mayor de los tres es b que vale: "+b)
//  } else if (c>a & c>b) {
//  console.log("El mayor de los tres es c que vale: "+c)
//  } else if (a=c=b) {
//  console.log("EL valor de todas las variables es el mismo.")
//  }
//}

//Ejercicio 2
//let to_determine = prompt("Introduce un numero para saber si es par o no")
//let result = to_determine % 2
//
//if (result == 0){
//  console.log("El numero ingresado ("+to_determine+") es par.")
//} else console.log("El numero ingresado ("+to_determine+") es impar.")

//Operadores de asignacion y bucles
//Ejercicio 1

//let number_to_substract = 10
//console.log("Ejercicio 3")
//while(number_to_substract>0){
//  console.log(number_to_substract)
//  number_to_substract = number_to_substract - 1
//}

//Ejercicio 2

//let number_to_pass
//
//do {
//  number_to_pass = prompt("Introduce un numero mayor a 100")
//} while (number_to_pass <= 100)
//
//console.log("Ingresaste un numero mayor a 100: "+number_to_pass)

//Funciones de JavaScript
//Ejercicio 1

//function esPar(number) {
//  if (number % 2 == 0){
//    return true
//  } else return false
//}
//
//console.log("El numero 10 es par: "+esPar(10))
//console.log("El numero 2 es par: "+esPar(2))
//console.log("El numero 3 es par: "+esPar(3))
//console.log("El numero 7 es par: "+esPar(7))

//Ejercicio 2

//function convertirCelsiusAFarenheit(celsius_to_convert) {
//  let result_in_farenheit = celsius_to_convert * 1.8 + 32
//  return result_in_farenheit
//}
//
//console.log("10° grados celsius en farenheit es: "+convertirCelsiusAFarenheit(10))

//Objetos en JavaScript
//Ejercicio 1

//let persona = {
//
//  nombre: "Naza",
//  edad: 19,
//  ciudad: "Guaymallen",
//  actualizarCiudad: function (city_to_name) {
//    this.ciudad = city_to_name
//  }
//
//}

//console.log("Datos del objeto persona: Nombre: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad)
//persona.actualizarCiudad("Maipu")
//console.log("Datos del objeto persona: Nombre: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad)

//Ejercicio 2

//let pares = []
//
//for (let el = 1; el<=20;el++){
//  if(el % 2 == 0){
//    pares.push(el) 
//  }
//}
//
//console.log(pares)
//for (let el = 0; el<pares.length;el++){
//  console.log(pares[el])
//}

//Introduccion al DOM
//Ejercicio 1

const buttonChangeBlue = document.getElementById("buttonChangeBlue")

buttonChangeBlue.addEventListener("click", ()=> {
  let parrafos = document.querySelectorAll("p");

  parrafos.forEach(parrafo => {
    parrafo.style.color = "blue";
  })
})

//Ejercicio 2
const btnShowAlert = document.getElementById('btnShownAlert')

btnShowAlert.addEventListener('click', () => {
  let message = document.getElementById("texto").value;
  alert(`Usted ingreso este texto: ${message}`)  
})

//Eventos de DOM
//Ejercicio 1
let elems = document.querySelectorAll("li")

elems.forEach((elem, index) => {
  elem.addEventListener('click', () =>{
    console.log('Elemento ', index+1)
  })
})

//Ejercicio 2 

const inputToBlock = document.getElementById('inputToBlock')
const buttonBlock = document.getElementById('Block')
const unblockButton = document.getElementById('Unlock')

buttonBlock.addEventListener('click', () => {
  inputToBlock.disabled = true;
})

unblockButton.addEventListener('click', () => {
  inputToBlock.disabled = false;
})

//LocalStorage
//Ejercicio 1

document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const emailForm = document.getElementById('emailForm');
  const storedEmailContainer = document.getElementById('storedEmailContainer');
  const deleteEmailButton = document.getElementById('deleteEmailButton');

  
  function displayStoredEmail() {
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
          storedEmailContainer.textContent = `Correo guardado: ${storedEmail}`;
          deleteEmailButton.style.display = 'block';
      } else {
          storedEmailContainer.textContent = '';
          deleteEmailButton.style.display = 'none';
      }
  }


  emailForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const email = emailInput.value;
      localStorage.setItem('email', email);
      displayStoredEmail();
  });


  deleteEmailButton.addEventListener('click', () => {
      localStorage.removeItem('email');
      displayStoredEmail();
  });

  
  displayStoredEmail();
});
