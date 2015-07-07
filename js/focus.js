$('#all').click( function() {  
	if(layerControls[0]==false){
		map.addLayer(food);map.addLayer(pub);map.addLayer(tourist);layerControls[0]=true;layerControls[1]=true;layerControls[2]=true;} 
	else {map.removeLayer(food);map.removeLayer(pub);map.removeLayer(tourist);layerControls[0]=false;layerControls[1]=false;layerControls[2]=false;}
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
