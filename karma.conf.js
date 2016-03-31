// Karma configuration
// Generated on Fri Mar 31 2016 21:30:24 GMT+0000 (WET)

module.exports = function(config) {
  config.set({
  
  basePath: '',
  
  frameworks: ['mocha', 'chai'],
  
   files: [
      'assets/js/conversor.js',
      'assets/js/main.js',
      'assets/js/medida.js',
      'assets/js/temperatura.js',
      'test/blanket.js',
      'test/chai.js',
      'test/medida_test.js',
      'test/mocha-blanket.js',
      'test/mocha.css',
      'test/mocha.js',
      'test/temperatura_test.js',
    ],
    
  client: {
          mocha: {
            ui: 'bdd'
          }
    },
    
  exclude: [

    ],
    
  preprocessors: {
      'index.html': ['html2js']
    },
    
  reporters: ['progress'],

  port: 9876,

  colors: true,

  logLevel: config.LOG_INFO,

  autoWatch: true,

  browsers: ['PhantomJS', 'Chrome', 'Safari', 'Firefox'], 

  singleRun: false
  
  
    });
};
