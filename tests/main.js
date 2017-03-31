(function (window) {

  let allTestFiles = [];
  let TEST_REGEXP = /.*spec\.js$/;

  for (let file in window.__karma__.files) {
    if (TEST_REGEXP.test(file)) {
      allTestFiles.push(file);
    }
  }

  const API_LOCATION = 'http://js.arcgis.com/3.19/';


  window.dojoConfig = {
    packages: [
      // local pacakges to test
      {
        name: 'local',
        location: '/base/dist/'
      },

      // esri/dojo packages
      {
        name: 'dgrid',
        location: API_LOCATION + 'dgrid'
      }, {
        name: 'dijit',
        location: API_LOCATION + 'dijit'
      }, {
        name: 'esri',
        location: API_LOCATION + 'esri'
      }, {
        name: 'dojo',
        location: API_LOCATION + 'dojo'
      }, {
        name: 'dojox',
        location: API_LOCATION + 'dojox'
      }, {
        name: 'put-selector',
        location: API_LOCATION + 'put-selector'
      }, {
        name: 'util',
        location: API_LOCATION + 'util'
      }, {
        name: 'xstyle',
        location: API_LOCATION + 'xstyle'
      }, {
        name: 'moment',
        location: API_LOCATION + 'moment'
      }
    ],
    async: true
  };

  /**
   * This function must be defined and is called back by the dojo adapter
   * @returns {string} a list of dojo spec/test modules to register with your testing framework
   */
  window.__karma__.dojoStart = function () {
    return allTestFiles;
  };
})(window);
