const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { amazon } = require('../data/amazonData');
const { AmazonHomePage } = require('../pages/AmazonHomePage');
const { AmazonResultsPage } = require('../pages/AmazonResultsPage');
const { AmazonProductPage } = require('../pages/AmazonProductPage');
const { CartProducts } = require('../pages/CartProducts');

let page;
let home;
let results;
let product;
let cart;

Given('el usuario ingresa a Amazon', async function () {
  page = this.page;

  home = new AmazonHomePage(page);
  results = new AmazonResultsPage(page);
  product = new AmazonProductPage(page);
  cart = new CartProducts(page);

  await home.goto(amazon.url);
  await expect(page).toHaveURL(/amazon\.com/);
});

When('busca el producto {string}', async function (productName) {
  await home.searchProduct(productName);
});

When('selecciona el primer producto', async function () {
  await results.selectFirstProduct();
});

When('selecciona la cantidad {string}', async function (quantity) {
  await product.selectQuantity(quantity);
});

Then('el producto se agrega correctamente al carrito y se procede a pagar', async function () {
  await cart.showCart();
  await product.clickBuyNow();
});
