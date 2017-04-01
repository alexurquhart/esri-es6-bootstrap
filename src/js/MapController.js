import declare from 'dojo/_base/declare';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

export default declare([], {
  _map: null,
  _mapView: null,

  constructor(node) {
    this._map = new Map({
      basemap: 'streets'
    });

    this._mapView = new MapView({
      container: node,
      map: this._map
    });
  }
});