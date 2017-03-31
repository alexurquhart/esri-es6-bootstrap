// Configuration file from: https://github.com/tomwayson/esri-karma-tutorial
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'dojo'],

    files: [
      'tests/main.js',
      {pattern: 'dist/**/*.js', included: false},
      {pattern: 'tests/*.js', included: false}
    ],

    reporters: [
      'dots',
      'coverage'
    ],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    preprocessors: {
      'dist/**/*.js': ['coverage']
    },

    port: 9876,

    // proxy for cross domain requests
    // proxies:  {
    //   '/arcgis/': 'http://imagery.arcgisonline.com/arcgis/'
    // },

    // cli runner port
    runnerPort: 9100,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      'Chrome'
    ],

    plugins: [
      'karma-dojo',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage'
    ],

    singleRun: false
  });
};