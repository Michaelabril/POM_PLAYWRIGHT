module.exports = {
  smoke: {
    paths: ['features/**/*.feature'],
    require: [
      'features/step_definitions/**/*.js',
      'features/support/**/*.js'
    ],
    publishQuiet: true
  }
};
