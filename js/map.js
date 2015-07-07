// Created 10/06/15 by Tom Feltwell

var latlng = L.latLng(53.2295, -0.5437);
var map = L.map('map', {zoom: 16, center: latlng});

//  Mapbox is set up using my (TF) access tokens

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 24,
    id: 'tfeltwell.mla98mjf',
    accessToken: 'pk.eyJ1IjoidGZlbHR3ZWxsIiwiYSI6IjIwZjQzOWM1NTUxZTc3ZTNlZTU3NmVlOWMzYjBmMzIwIn0.CNTLHsphlqYYruwDdT9JsQ'
}).addTo(map);

var markerTypes = [
  new L.AwesomeMarkers.icon({icon: 'icon ion-ios-home',markerColor: 'green'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-wineglass',markerColor: 'blue'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-coffee',markerColor: 'purple'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-android-restaurant',markerColor: 'orange'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-map',markerColor: 'cadetblue'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-card',markerColor: 'green'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-university',markerColor: 'red'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-ios-cart',markerColor: 'orange'}),
  new L.AwesomeMarkers.icon({icon: 'icon ion-medkit',markerColor: 'red'})
];

var layerControls = [ false, false, false];

// Conf essential
for (var i = 0; i < mainPoints.length; i++){
  var a = mainPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  marker.addTo(map)
}

var food = L.markerClusterGroup();
for (var i = 0; i < foodPoints.length; i++){
  var a = foodPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  food.addLayer(marker);
}

var pub = L.markerClusterGroup();
for (var i = 0; i < pubPoints.length; i++){
  var a = pubPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  pub.addLayer(marker);
}

var tourist = L.markerClusterGroup();
for (var i = 0; i < touristPoints.length; i++){
  var a = touristPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  tourist.addLayer(marker);
}