import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

class MapController {
  constructor(node) {
    this._map = new Map({
      basemap: 'streets'
    });

    this._mapView = new MapView({
      container: node,
      map: this._map
    });
  }

  changeBasemap(newMap) {
    this._map.basemap = newMap;
  }
}

export default MapController;