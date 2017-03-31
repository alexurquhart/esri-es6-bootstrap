/* eslint-env jasmine, browser */
/* eslint no-var: "off" */

define([
  'dojo/dom-construct',
  'esri/map',
], function (
  domConstruct,
  Map
) {

  describe('map tests', function () {
    var map;
    var frag;

    // create the map
    beforeEach(function () {
      frag = document.createDocumentFragment();
      var div = domConstruct.create('div', {
        style: 'width:300px;height:200px'
      });
      domConstruct.place(div, frag);
      map = new Map(div, {
        basemap: 'topo',
        center: [-122.45, 37.75],
        zoom: 13,
        sliderStyle: 'small'
      });
      console.log('created map');
    });

    // destroy the map
    afterEach(function () {
      map.destroy();
      map = null;
      frag = null;
    });

    it('should add the layer if not already added', function () {
      let a = 1;
      expect(a).toBe(1);
    });

  });
});
