define(['esri/Map', 'esri/views/MapView'], function (Map, MapView) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var MapController = function () {
    function MapController(node) {
      _classCallCheck(this, MapController);

      this._map = new Map({
        basemap: 'streets'
      });

      this._mapView = new MapView({
        container: node,
        map: this._map
      });
    }

    _createClass(MapController, [{
      key: 'changeBasemap',
      value: function changeBasemap(newMap) {
        this._map.basemap = newMap;
      }
    }]);

    return MapController;
  }();

  return MapController;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL01hcENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiTWFwIiwiTWFwVmlldyIsIk1hcENvbnRyb2xsZXIiLCJub2RlIiwiX21hcCIsImJhc2VtYXAiLCJfbWFwVmlldyIsImNvbnRhaW5lciIsIm1hcCIsIm5ld01hcCJdLCJtYXBwaW5ncyI6IlFBQWdCLFUsRUFDSSxvQixhQURiQSxHLEVBQ0FDLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFREMsYTtBQUNKLDJCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFdBQUtDLElBQUwsR0FBWSxJQUFJSixHQUFKLENBQVE7QUFDbEJLLGlCQUFTO0FBRFMsT0FBUixDQUFaOztBQUlBLFdBQUtDLFFBQUwsR0FBZ0IsSUFBSUwsT0FBSixDQUFZO0FBQzFCTSxtQkFBV0osSUFEZTtBQUUxQkssYUFBSyxLQUFLSjtBQUZnQixPQUFaLENBQWhCO0FBSUQ7Ozs7b0NBRWFLLE0sRUFBUTtBQUNwQixhQUFLTCxJQUFMLENBQVVDLE9BQVYsR0FBb0JJLE1BQXBCO0FBQ0Q7Ozs7OztTQUdZUCxhIiwiZmlsZSI6ImpzL01hcENvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFwIGZyb20gJ2VzcmkvTWFwJztcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5cbmNsYXNzIE1hcENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgdGhpcy5fbWFwID0gbmV3IE1hcCh7XG4gICAgICBiYXNlbWFwOiAnc3RyZWV0cydcbiAgICB9KTtcblxuICAgIHRoaXMuX21hcFZpZXcgPSBuZXcgTWFwVmlldyh7XG4gICAgICBjb250YWluZXI6IG5vZGUsXG4gICAgICBtYXA6IHRoaXMuX21hcFxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlQmFzZW1hcChuZXdNYXApIHtcbiAgICB0aGlzLl9tYXAuYmFzZW1hcCA9IG5ld01hcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBDb250cm9sbGVyOyJdfQ==
