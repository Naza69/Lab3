//Tarea 5.9.2024
//Ejercicios con fetch y promesas

//Ejercicio 1 con asincrono no bloqueante

//async function fecthUser() {
//    const respuesta = await fetch("https://randomuser.me/api/")
//
//    const data = await respuesta.json();
//    console.log(data);
//    const container = document.getElementById("dataContainer")
//    const persona = data.results[0]
//    const nombre = `${persona.name.first} ${persona.name.last}`;
//    console.log(nombre);
//    const nacionalidad = `${persona.location.country}`
//    console.log(nacionalidad)
//    const estado = `${persona.location.state}`
//    console.log(estado)
//    const imagen = `${persona.picture.medium}`
//    console.log(imagen);
//
//    container.innerHTML = `
//    <p>${nombre}</p>
//    <p>${nacionalidad}</p>
//    <img src=${imagen} width=400/>
//    `
//
//}
//
//fecthUser();
//
////Ejercicio 1 con sincronico bloqueante
//
//function getUserDataWithThen() {
//    fetch("https://randomuser.me/api/")
//    .then((res) => res.json())
//    .then((data) => {
//        const person = data.results[0]
//        const nombre = `${person.name.first} ${person.name.last}`;
//        const ubicacion = `${person.location.country}, ${person.location.state}`;
//        const urlImage = person.picture.medium;
//        const divInfo = document.getElementById("userInfo")
//        userInfo.innerHTML = `
//        <p>${nombre}</p>
//        <p>${nacionalidad}</p>
//        <img src=${imagen} width=400/>
//        `
//    })
//    .catch((err) => console.log(err));
//}

//Ejercicio 2

//Creo la funcion asincrona
//async function fetchUserPosts() { 
//
//    //Se almacena en una variable lo extraido del EndPoint (La respuesta por peticion a la API)
//    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//
//    //Se transforma a un archivo json para manipular sus datos y objetos
//    const data = await response.json();
//    console.log(data)
//
//    //Se crea un elemento lista en el documento html para contener los post 
//    const ul = document.createElement("ul")
//
//    //Se trae el contenedor donde ira la lista como nodo
//    const postlist = document.getElementById("postsList")
//
//    //Se separa el json en sus distintos post extraibles para guardarlos en el elemento lista creado
//    //El for each se usa para recorrer cada post e insertarlo en el contenido de texto de cada elementos de la lista
//    data.slice(0, 10).forEach(post =>{
//
//        //Se crea el elemento de la lista
//        const li = document.createElement('li');
//
//        li.textContent = post.title;
//        ul.appendChild(li);
//    })
//
//    //Se añade el elemento lista al contenedor del nodo div en el html
//    postlist.appendChild(ul)
//
//}
//
//fetchUserPosts();

//Ejercicio 3

async function fetchLocalClimate() {
    
    const respuesta = fetch("https://api.openweathermap.org/data/2.5/weather?lat=-32.89084&lon=-68.82717&appid=c61e0400e304a834d4159274cfc06146")
    const data = (await respuesta).json

    const temperatura = data.main.temp

    const weatherReport = document.getElementById("weatherInfo")

    weatherReport.innerHTML = `
    <p>${temperatura}<p/>
    `
}

fetchLocalClimate();