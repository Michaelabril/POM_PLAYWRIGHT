// pages/inventory.Amazon.page.js
const { expect } = require('@playwright/test');

class InventoryAmazon {

  constructor(page) {
    this.page = page;

    // Url amazon
    this.url = 'https://www.amazon.com/-/es/';

    // Locators principales de Amazon
    this.searchnavbar = page.locator('#twotabsearchtextbox');
    this.searchbtn    = page.locator('#nav-search-submit-button');
    this.item1        = page.locator('h2[aria-label^="TBOLINE - Huevo de dragón"]');
    this.buybtn       = page.locator('#buy-now-button');
  }

  // ir al sitio web 
  async goto() {
    await this.page.goto(this.url);
  }

  // cada async es una tarea para test
  async searchItemAmazon(itemname) {
    await this.searchnavbar.fill(itemname);
    await this.searchbtn.click();
  }

  async openDragonAndBuyNow() {
    await this.item1.click();
    await this.buybtn.click();
  }
}

// exporta el módulo para ser reutilizado como biblioteca
module.exports = { InventoryAmazon };
