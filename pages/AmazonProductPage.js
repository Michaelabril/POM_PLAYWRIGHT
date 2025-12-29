class AmazonProductPage {
  constructor(page) {
    this.page = page;
    this.quantityButton  = page.locator('#a-autoid-0-announce');
    this.selectcount = page.locator('#quantity');
    this.buybtn = page.locator('#sc-buy-box-ptc-button');
  }

  async selectQuantity(quantity) {
    // Amazon espera string
    await this.quantityButton .click();
    await this.selectcount.selectOption(quantity.toString());
  }
  async clickBuyNow() {
    await this.buybtn.click();
  }
}

module.exports = { AmazonProductPage };