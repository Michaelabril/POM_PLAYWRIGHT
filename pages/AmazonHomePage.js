class AmazonHomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
  }

  async goto(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async searchProduct(product) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }
}

module.exports = { AmazonHomePage };
