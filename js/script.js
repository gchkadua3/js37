const apiUrl = 'https://fakestoreapi.com/products';

axios.get(apiUrl).then(response => {
    const products = response.data;
    const cardContainer = document.querySelector('.card-container');
    for(let i = 0; i < 8; i++) { 
        const card = document.createElement('div');
        card.classList.add('card');
        const product = products[i];

        card.innerHTML = `
        <img src=${product.image}>
        <p class="description">${product.title}</p>
        <p class="price">Price: ${product.price}</p>
        `;

        cardContainer.appendChild(card);
    }
});


axios.get(apiUrl).then(response => {
    const products = response.data;
    const cardContainer2 = document.querySelector('.card-container2');
    for(let i = 0; i < 4; i++) { 
        const card = document.createElement('div');
        card.classList.add('card');
        const product = products[i];

        card.innerHTML = `
        <img src=${product.image}>
        <p class="description">${product.title}</p>
        <p class="price">Price: ${product.price}</p>
        `;

        cardContainer2.appendChild(card);
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menuItems = document.querySelector(".menu-items");

    menuButton.addEventListener("click", function () {
        menuItems.classList.toggle("active");
    });
});

