// 1 - Hacer fetch de productos
// https://fakestoreapi.com/products

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(products => console.log(products))


// 2 - Generar en el DOM tarjetas que contengan título, foto, descripción, 
// precio de cada elemento.

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(products => {
//         for (let i = 0; i < products.length; i++) {

//             let card = `<aticle class="card">
//                 <h2>${products[i].title}</h2>
//                 <img src=${products[i].image} alt=${products[i].image}>
//                 <p>${products[i].description}</p>
//                 <h3>Price: ${products[i].price}$</h3>
//             </article>`;
//             console.log(card);
//             document.getElementById("products").innerHTML += card;
//         }

//     })


// 3 - Hacer un fetch a fakestoreapi para obtener las categorías de 
// productos (Buscar en la documentación de la API el endpoint correspondiente)

// fetch('https://fakestoreapi.com/products/categories')
//     .then(res => res.json())
//     .then(json => console.log(json))


// 4 - Generar en el DOM un <select> que contenga en sus opciones los nombres
//  de las categorías en fakestoreapi. Las opciones deberán generarse dinámicamente,
//  como las tarjetas del punto 2, no podrán escribirse a mano. La primera
//   opción de nuestro <select> deberá ser "Todas las categorías".


fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(categories => {
        let select2 = "";
        for (let i = 0; i < categories.length; i++) {
            let cat = `<option value="${categories[i]}">${categories[i]}</option>`
            select2 += cat;
        }
        let select3 = `</select>`;
        let select = `<select class="categories">` + select2 + select3;
        console.log(select);
        document.getElementById("products").innerHTML += select;
    })
