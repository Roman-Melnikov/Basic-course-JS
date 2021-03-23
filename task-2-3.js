"use strict"

/**
 * возвращает сумму товаров в корзине
 */
function countBasketPrice(cart) {
    for (var i = 0, sum = 0; i < cart.length; i++) {
        sum = sum + cart[i].price * cart[i].count;
    }
    return sum;
}

var basket = [
    {
        name: "product1",
        price: 50,
        count: 3,
    },
    {
        name: "product2",
        price: 500,
        count: 2,
    },
    {
        name: "product3",
        price: 1000,
        count: 1,
    }
];

console.log(countBasketPrice(basket));