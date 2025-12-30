module.exports = {
  smoke: {
    paths: ['features/**/*.feature'],
    require: [
      'steps/**/*.js',
      'features/support/**/*.js'
    ],
    format: [
      'json:reports/cucumber_report.json'
    ],
    publishQuiet: true
  }
};
