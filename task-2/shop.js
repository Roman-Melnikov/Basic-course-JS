"use strict"

var container = document.querySelector(".container");
var cart = container.appendChild(document.createElement("div"));
cart.classList.add("cart");
var products = container.appendChild(document.createElement("div"));
products.classList.add("products");
var table;
var sum = 0;

for (var i = 0; i <= 3; i++) {
    products.insertAdjacentHTML("beforeend", "<div class='products-item'><span>" + goods[i].name +
        "</span><img src=" + goods[i].img + " width='200' height='200'><span>" + goods[i].price + " руб</span>" +
        "<button id=b" + (i + 1) + ">add cart</button></div>");
}

for (var i = 0; i < goods.length; i++) {
    document.getElementById("b" + (i + 1)).onclick = addCart;
}

function addCart(e) {
    goods[e.target.id[1] - 1].quantity += 1;
    goods[e.target.id[1] - 1].sum += goods[e.target.id[1] - 1].price;
    sum += goods[e.target.id[1] - 1].price;
    showCart();
}

function showCart () {
    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
    table = cart.appendChild(document.createElement("table"));
    table.innerHTML = "<tr class='cart-first-row'><td>Наименование товара</td><td>Количество</td><td>Сумма</td></tr>"
    for (var i = 0; i < goods.length; i++) {
        if (goods[i].quantity !== 0) {
            table.insertAdjacentHTML("beforeend", "<tr class='cart-rows'><td>" + goods[i].name +
                "</td><td> " + goods[i].quantity + "</td><td>  " + goods[i].sum + "</td></tr>");
        }
    }
    table.innerHTML += "<tr class='cart-last-row'><td>Общая сумма: " + sum + " руб</td></tr>";
}