const { Before, After, setDefaultTimeout, AfterStep } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

// Aumentamos el tiempo a 60 segundos (60000 ms)
setDefaultTimeout(60000);

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

AfterStep(async function ({ pickleStep }) {

  // Extraemos el nombre del paso (ej: "busca el producto 'dragon ball z goku'")
  const stepName = pickleStep.text.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  // Tomamos la captura de pantalla en formato buffer
  const image = await this.page.screenshot({ path: `./screenshots/${stepName}.png` });
  // Adjuntamos la imagen al reporte de Cucumber
  await this.attach(image, 'image/png' );
  
  });

After(async function () {

  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
