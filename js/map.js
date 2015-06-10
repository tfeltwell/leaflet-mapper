// Created 10/06/15 by Tom Feltwell

var map = L.map('map').fitBounds([[54.3261, -4.4659], [52.197, 5.680]]);

//  Mapbox is set up using my (TF) access tokens

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'tfeltwell.mdfbe391',
    accessToken: 'pk.eyJ1IjoidGZlbHR3ZWxsIiwiYSI6IjIwZjQzOWM1NTUxZTc3ZTNlZTU3NmVlOWMzYjBmMzIwIn0.CNTLHsphlqYYruwDdT9JsQ'
}).addTo(map);

var ferryMarker = L.AwesomeMarkers.icon({
    icon: 'icon ion-android-boat',
    markerColor: 'cadetblue'
  });

var homeMarker = L.AwesomeMarkers.icon({
    icon: 'icon ion-ios-home',
    markerColor: 'green'
  });

var campMarker = L.AwesomeMarkers.icon({
    icon: 'icon ion-bonfire',
    markerColor: 'green'
  });

var showMarker = L.AwesomeMarkers.icon({
    icon: 'icon ion-trophy',
    markerColor: 'darkred'
  });               

var carMarker = L.AwesomeMarkers.icon({
    icon: 'icon ion-android-car',
    markerColor: 'red'
  });

var beerMarker = L.AwesomeMarkers.icon({
    icon: 'icon ion-beer',
    markerColor: 'green'
  });

var thingMarker = L.AwesomeMarkers.icon({
    icon: 'icon ion-map',
    markerColor: 'green'
  });

// L.marker([51.941196,4.30697], {icon: ferryMarker}).addTo(map); 
var home = L.marker([53.2333, -0.5391], {icon: homeMarker}).addTo(map);
var hull = L.marker([53.7408, -0.2788], {icon: ferryMarker}).addTo(map);
var bbt = L.marker([51.29981, 4.55234], {icon: carMarker}).addTo(map);
var camberg = L.marker([50.29957, 8.26730], {icon: showMarker}).addTo(map);
var campsite1 = L.marker([50.3871, 8.0636], {icon: campMarker}).addTo(map);
var vianden = L.marker([49.9337, 6.2066], {icon: thingMarker, opacity: 0.8}).addTo(map);
var diekirch = L.marker([49.8691, 6.1600], {icon: thingMarker, opacity: 0.8}).addTo(map);  
var rhine = L.marker([50.1531, 7.7103], {icon: carMarker, opacity: 0.8}).addTo(map);
var luxembourg = L.marker([49.9076, 6.1888], {icon: campMarker}).addTo(map); 
var ebi = L.marker([50.05618, 4.30697], {icon: showMarker}).addTo(map); 
var europoort = L.marker([51.9368, 4.1461], {icon: ferryMarker}).addTo(map);

// Lets add info to each one of these
hull.bindPopup("<b>1.</b> Hull <i class=\"icon ion-ios-arrow-thin-right\"></i> Europoort").openPopup();
europoort.bindPopup("<b>6.</b> Europoort <i class=\"icon ion-ios-arrow-thin-right\"></i> Hull")
bbt.bindPopup("<b>2.</b> <img src=\"images/bbt.png\" height=\"70\" /><br />BBT Cruise to Bad Camberg");
camberg.bindPopup("<b>3.</b> <img src=\"images/camberg.jpg\" height=\"70\" /><br />Bad Camberg VW Show");
rhine.bindPopup("<b>4.</b> <img src=\"images/rhine-cruise.jpg\" height=\"70\" /><br />Cruise up Rhine Valley");
luxembourg.bindPopup("<b>5.</b> Camping in Luxembourg");
ebi.bindPopup("<b>6.</b> <img src=\"images/ebi.png\" height=\"70\" /><br />European Bug-In");

var lineVars = {color: 'black', opacity: 0.8, weight: 3, dashArray: '5, 10'};

var line0 = L.polyline([[53.2333, -0.5391],[53.7408, -0.2788]], lineVars).addTo(map);
var line1 = L.polyline([[51.9368, 4.1461],[51.29981, 4.55234]], lineVars).addTo(map);
var line2 = L.polyline([[51.29981, 4.55234],[50.29957, 8.26730]], lineVars).addTo(map);
var line3 = L.polyline([[50.29957, 8.26730],[49.9076, 6.1888]], lineVars).addTo(map);
var line4 = L.polyline([[49.9076, 6.1888],[50.05618, 4.30697]], lineVars).addTo(map);
var line5 = L.polyline([[50.05618, 4.30697],[51.9368, 4.1461]], lineVars).addTo(map);
var line5 = L.polyline([[51.9368, 4.1461],[53.7408, -0.2788]], lineVars).addTo(map);
