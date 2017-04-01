import MapController from 'app/MapController';

const mapNode = document.createElement('div');
mapNode.id = 'map';
document.getElementById('app').appendChild(mapNode);

const mc = new MapController(mapNode);