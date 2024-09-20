// Logica para el almacenamiento continuo con LocalStorage

const saveToLocalStorage = (arrayOfObject) => {
    localStorage.setItem('products', JSON.stringify(arrayOfObject)); // Convierte el array a string y lo guarda a 
}

//----Cargo productos desde el LocalStorage----
const loadFromLocalStorage = () => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : []; // Si no hay nada en localStorage, devuelve un array vacio
}

// Logica para el pop up del formulario adhesor de los elementos y la agregacion de los productos

let selectionSection = document.getElementsByClassName("selectionSection")[0]

const headerButtonAdd = document.getElementsByClassName("header__buttonAdd")[0]

headerButtonAdd.addEventListener("click", () => {
    selectionSection.classList.toggle("selectionSectionPop")
})

const buttonCloseSelection = document.getElementsByClassName("buttonClose__selection")[0]

buttonCloseSelection.addEventListener("click", () => {
    if(selectionSection.classList.contains("selectionSectionPop")){
        selectionSection.classList.remove("selectionSectionPop")
    } else {
        selectionSection.classList.toggle("selectionSectionPop")
    }
})

const buttonCancel = document.getElementsByClassName("buttonCancel")[0]

buttonCancel.addEventListener("click", () => {
    if(selectionSection.classList.contains("selectionSectionPop")){
        selectionSection.classList.remove("selectionSectionPop")
    } else {
        selectionSection.classList.toggle("selectionSectionPop")
    }
    
})

const selectionForm = document.getElementsByClassName("selectionForm")[0]

const containerPrincipalproducts = document.getElementsByClassName("container__Principalproducts")[0]

const selectionbuttonAdd = document.getElementsByClassName("buttonAccept")[0]

let productsArray = loadFromLocalStorage() || []

function deleteProduct(productsArray, dataIndex){
    productsArray.splice(dataIndex, 1);  
}

function renderProducts(productsArray){
    containerPrincipalproducts.innerHTML = ``

    productsArray.forEach((product, index) => {
        let newProduct = `
        <div class="product">
            <p>Nombre: ${product.name}</p>
            <img src="${product.image}" alt="Imagen de producto">
            <p>Precio: $ ${product.price}</p>
            <p>Categoria: ${product.categorie}</p>
            <button class="buttonDelete" data-index="${index}">Eliminar</button>
        </div>
        `

        containerPrincipalproducts.insertAdjacentHTML("beforeend", newProduct)
    })

    const buttonsDelete = document.querySelectorAll(".buttonDelete")

    buttonsDelete.forEach(button => {
        button.addEventListener("click", (event) => {
            let response = confirm("¿Seguro que quieres eliminar este elemento?")
            if(response){
                const productIndex = event.target.getAttribute("data-index")
                deleteProduct(productsArray, productIndex)
                renderProducts(productsArray)
                saveToLocalStorage(productsArray)
            } else {
                renderProducts(productsArray)
            }
            
    })
})}


selectionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let formData = new FormData(selectionForm); 
    let formObject = {};
    
    formData.forEach((value, key) => {
    formObject[key] = value;
    });
    

    if(!formObject["name"] || !formObject["image"] || !formObject["price"] || !formObject["categorie"]){
        alert("No se puede ingresar un campo nulo, vuelva a intentarlo.")
        selectionSection.classList.toggle("selectionSectionPop");
    } else {
    
    productsArray.push(formObject)
    renderProducts(productsArray)
    selectionSection.classList.toggle("selectionSectionPop");
    selectionForm.reset();
    saveToLocalStorage(productsArray)
    }
    
});

document.addEventListener("visibilitychange", () => {
    if(!document.hidden){
        renderProducts(productsArray);
    }
})

if (!document.hidden){
    renderProducts(productsArray)
}

// Logica para el aside de categorias

const categoriesOptions = document.querySelectorAll(".categoriesOptions")

const categoriesOptionsForHelp = document.querySelectorAll(".categoriesOptions")

categoriesOptions.forEach(option => {
    option.addEventListener("click", () => {
        const hasClass = option.classList.contains("categoriesOptionsWhenClick")
        categoriesOptions.forEach(elem => {
            elem.classList.remove("categoriesOptionsWhenClick")
        })
        if(!hasClass){
            option.classList.add("categoriesOptionsWhenClick")
        }
    })
})


const getProducts = (arrayOfObject, id, categoryProduct) => { //Recibe un array, un id y la categoria del producto
    const product = document.getElementById(id); 
    product.addEventListener("click", () => {
        const productsFilters = arrayOfObject.filter(element => element.categorie === categoryProduct);
        renderProducts(productsFilters);

    });
}

// productsArray = [
//     {
//         name: "Coca cola",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFd45svOiyV8P9xIMiBH2FwNyr9r4w74-Tfw&s",
//         price: 3000,
//         categorie: "Bebidas"
//     },
//     {
//         name: "Pizza",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdOj2Mc9yIy_cIP54Y9K5XpwQf05SZe-nBw&s",
//         price: 9000,
//         categorie: "Comida rapida"
//     },
//     {
//         name: "Sushi",
//         image: "https://resizer.glanacion.com/resizer/v2/maki-AXMW5TBU55EUZO3OT4KW4473FQ.jpg?auth=108cff8864e3f3a3ccf073f7068b8656cfd76968906f8681182176be8c7246bf&width=768&height=512&quality=70&smart=true",
//         price: 10000,
//         categorie: "Pescado y mariscos"
//     },
//     {
//         name: "Fideos a la bolognesa",
//         image: "https://assets.unileversolutions.com/recipes-v2/236484.jpg",
//         price: 9000,
//         categorie: "Pastas"
//     }
// ]

renderProducts(productsArray)

getProducts(productsArray, "pastas", "Pastas")

getProducts(productsArray, "bebidas", "Bebidas")

getProducts(productsArray, "comidarapida", "Comida rapida")

getProducts(productsArray, "pescadoymariscos", "Pescado y mariscos")

// Logica para los productos

// Logica para el buscador

buttonSearch = document.getElementsByClassName("buttonSearch")[0]

inputSearch = document.getElementsByClassName("inputHeader")[0]

const getName = (productsArray) => {
    const buttonSearch = document.getElementById("buttonSearch");
    buttonSearch.addEventListener("click", () => {
        const inputSearch = document.getElementById("inputSearch").value.toLowerCase(); 

        const result = getFilterForName(productsArray, inputSearch);

        if(result == null) {
            alert("No se encontro el producto");
        }else {
            let newArray = [];
            newArray.push(result)
            renderProducts(newArray); 
            inputSearch.value = ""; 
        }

    })

}

const getFilterForName = (arrayOfObject, name) =>{
    return arrayOfObject.find(element => element.name.toLowerCase() === name) || null;
}

getName(productsArray)


