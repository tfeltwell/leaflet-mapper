// Created 10/06/15 by Tom Feltwell

var latlng = L.latLng(53.2295, -0.5437);
var map = L.map('map', {zoom: 15, center: latlng});

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

var layerControls = [false, false, false]; // Food, Drink, Sights & Misc

// Conf essential
for (var i = 0; i < mainPoints.length; i++){
  var a = mainPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  marker.addTo(map)
}

var food = L.markerClusterGroup({ disableClusteringAtZoom: 16});
for (var i = 0; i < foodPoints.length; i++){
  var a = foodPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  food.addLayer(marker);
}

var pub = L.markerClusterGroup({ disableClusteringAtZoom: 16});
for (var i = 0; i < pubPoints.length; i++){
  var a = pubPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  pub.addLayer(marker);
}

var tourist = L.markerClusterGroup({ disableClusteringAtZoom: 16});
for (var i = 0; i < touristPoints.length; i++){
  var a = touristPoints[i];
  var title = a[2];
  var type = markerTypes[a[3]];
  var marker = L.marker(new L.latLng(a[0],a[1]), {title: title, icon: type});
  marker.bindPopup(title);
  tourist.addLayer(marker);
}

// Controls to toggle layers
$('#all').click( function() {  
  if(layerControls[0]==false){
    map.addLayer(food);map.addLayer(pub);map.addLayer(tourist);layerControls[0]=true;layerControls[1]=true;layerControls[2]=true;
    $("#all").removeClass("btn-default").addClass("btn-success");} 
  else {map.removeLayer(food);map.removeLayer(pub);map.removeLayer(tourist);layerControls[0]=false;layerControls[1]=false;layerControls[2]=false;
    $("#all").removeClass("btn-success").addClass("btn-default");}
  return false; } ); 

$('#1').click( function() {  
  if(layerControls[0]==false){
    map.addLayer(food);layerControls[0]=true;} 
  else {map.removeLayer(food); layerControls[0]=false;}
  return false; } ); 

$('#2').click( function() {  
  if(layerControls[1]==false){
    map.addLayer(pub);layerControls[1]=true;} 
  else {map.removeLayer(pub); layerControls[1]=false;}
  return false; } ); 

$('#3').click( function() {  
  if(layerControls[2]==false){
    map.addLayer(tourist);layerControls[2]=true;} 
  else {map.removeLayer(tourist); layerControls[2]=false;}
    return false; } ); 
