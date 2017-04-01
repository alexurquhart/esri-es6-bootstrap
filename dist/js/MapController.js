define(['dojo/_base/declare', 'esri/Map', 'esri/views/MapView'], function (declare, Map, MapView) {
  return declare([], {
    _map: null,
    _mapView: null,

    constructor: function constructor(node) {
      this._map = new Map({
        basemap: 'streets'
      });

      this._mapView = new MapView({
        container: node,
        map: this._map
      });
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL01hcENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZGVjbGFyZSIsIk1hcCIsIk1hcFZpZXciLCJfbWFwIiwiX21hcFZpZXciLCJjb25zdHJ1Y3RvciIsIm5vZGUiLCJiYXNlbWFwIiwiY29udGFpbmVyIiwibWFwIl0sIm1hcHBpbmdzIjoiUUFBb0Isb0IsRUFDSixVLEVBQ0ksb0IsYUFGYkEsTyxFQUNBQyxHLEVBQ0FDLE87U0FFUUYsUUFBUSxFQUFSLEVBQVk7QUFDekJHLFVBQU0sSUFEbUI7QUFFekJDLGNBQVUsSUFGZTs7QUFJekJDLGVBSnlCLHVCQUliQyxJQUphLEVBSVA7QUFDaEIsV0FBS0gsSUFBTCxHQUFZLElBQUlGLEdBQUosQ0FBUTtBQUNsQk0saUJBQVM7QUFEUyxPQUFSLENBQVo7O0FBSUEsV0FBS0gsUUFBTCxHQUFnQixJQUFJRixPQUFKLENBQVk7QUFDMUJNLG1CQUFXRixJQURlO0FBRTFCRyxhQUFLLEtBQUtOO0FBRmdCLE9BQVosQ0FBaEI7QUFJRDtBQWJ3QixHQUFaLEMiLCJmaWxlIjoianMvTWFwQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWNsYXJlIGZyb20gJ2Rvam8vX2Jhc2UvZGVjbGFyZSc7XG5pbXBvcnQgTWFwIGZyb20gJ2VzcmkvTWFwJztcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlY2xhcmUoW10sIHtcbiAgX21hcDogbnVsbCxcbiAgX21hcFZpZXc6IG51bGwsXG5cbiAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgIHRoaXMuX21hcCA9IG5ldyBNYXAoe1xuICAgICAgYmFzZW1hcDogJ3N0cmVldHMnXG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXBWaWV3ID0gbmV3IE1hcFZpZXcoe1xuICAgICAgY29udGFpbmVyOiBub2RlLFxuICAgICAgbWFwOiB0aGlzLl9tYXBcbiAgICB9KTtcbiAgfVxufSk7Il19
