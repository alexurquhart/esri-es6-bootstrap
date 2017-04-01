/* eslint-env jasmine, browser */
/* eslint no-var: "off" */
define([
  'app/MapController'
], function (
  MapController
) {

  describe('MapController tests', function () {
    it('Should create a map upon creation', function () {
      var mapNode = document.createElement('div');
      document.body.appendChild(mapNode);
      var mc = new MapController(mapNode);
      expect(mapNode.classList.contains('esri-view')).toBeTruthy();
    });
  });
});
