 class CartProducts {
  constructor(page) {
    this.page = page;
    this.cart = page.locator('#add-to-cart-button') 
  }

  async showCart() {
    await this.cart.click();
  }

}

module.exports = { CartProducts };