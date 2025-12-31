const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  reportName: 'Automation Test Report',
  pageTitle: 'Cucumber Automation Report',
  displayDuration: true,

  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local Execution',
    platform: {
      name: process.platform === 'win32' ? 'Windows' : process.platform
    }
  }
});

console.log('✅ HTML report generated successfully');
