 class AmazonResultsPage {
  constructor(page) {
    this.page = page;
    this.firstResult = page.getByRole('link', { name: /Un Saiyan criado en la Tierra/i }).first();
  }

  async selectFirstProduct() {
    await this.firstResult.waitFor({ state: 'visible' });
    await this.firstResult.click();
  }
}

module.exports = { AmazonResultsPage };