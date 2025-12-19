// tests/purchaseitem.spec.js
const { test } = require('@playwright/test');
const { InventoryAmazon } = require('../pages/inventory.Amazon.page.js');

// colocamos hooks para tareas comunes 
test.describe('Amazon - compras', () => {
    //hook de antes para preparar entorno
  test.beforeEach(async ({ page }) => {
    const inventoryAmazonPage = new InventoryAmazon(page);
    await inventoryAmazonPage.goto();
  });
  //hook para preparar paso a paso del test
  test('buscar dragon en la tienda de amazon y dar click en comprar ahora', async ({ page }) => {
    const inventoryAmazonPage = new InventoryAmazon(page);

    await inventoryAmazonPage.searchItemAmazon('dragon');
    await inventoryAmazonPage.openDragonAndBuyNow();
  });

});
