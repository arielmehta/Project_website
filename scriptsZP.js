// google maps api stuff
var trap_locations = [{lat: 37.569957, lng: -121.954435}, {lat:37.551280, lng: -121.971380}, {lat: 37.546347 , lng: -121.965937}, {lat: 37.543335, lng: -121.986439 }]
var titles = ["Example_1", "Example_2", "Example_3", "Example_4"]

function initMap() {
  var myLatLng = {lat: 37.564771, lng: -121.965305};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
});

var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Morrison Canyon Road</h1>'+
      '<div id="bodyContent">'+ '<img src= "Images/hills.jpg"/>'+
      '<p><b>Morrison Canyon Road Trap #1 </b> This is an example. This is an example. This is an example. This is an example. ' +
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. '+
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example.' +
      'This is an example. This is an example. This is an example. This is an example.'+
      '</div>'+
      '</div>';
var content2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Fremont Main Library</h1>'+
      '<div id="bodyContent">'+ '<img src= "Images/lib.jpg"/>'+
      '<p><b>Fremont Main Library Trap #2 </b> This is an example. This is an example. This is an example. This is an example. ' +
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. '+
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example.' +
      'This is an example. This is an example. This is an example. This is an example.'+
      '</div>'+
      '</div>';
var content3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Central Park</h1>'+
      '<div id="bodyContent">'+ '<img src= "Images/lake.jpg"/>'+
      '<p><b>Central Park Trap #3 </b> This is an example. This is an example. This is an example. This is an example. ' +
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. '+
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example.' +
      'This is an example. This is an example. This is an example. This is an example.'+
      '</div>'+
      '</div>';
var content4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"> Fremont Hub </h1>'+
      '<div id="bodyContent">'+ '<img src= "Images/tj.jpg"/>'+
      '<p><b>Fremont Hub Trap #4 </b> This is an example. This is an example. This is an example. This is an example. ' +
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. '+
      'This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example. This is an example.' +
      'This is an example. This is an example. This is an example. This is an example.'+
      '</div>'+
      '</div>';

var content = [contentString, content2, content3, content4]

var marker0 = new google.maps.Marker({
  position: trap_locations[0],
  map: map,
  title: titles[0]
});
var infowindow0 = new google.maps.InfoWindow({
  content: content[0]
});
marker0.addListener('click', function() {
  infowindow0.open(map, marker0);
});


var marker1 = new google.maps.Marker({
  position: trap_locations[1],
  map: map,
  title: titles[1]
});
var infowindow1 = new google.maps.InfoWindow({
  content: content[1]
});
marker1.addListener('click', function() {
  infowindow1.open(map, marker1);
});


var marker2 = new google.maps.Marker({
  position: trap_locations[2],
  map: map,
  title: titles[2]
});
var infowindow2 = new google.maps.InfoWindow({
  content: content[2]
});
marker2.addListener('click', function() {
  infowindow2.open(map, marker2);
});

var marker3 = new google.maps.Marker({
  position: trap_locations[3],
  map: map,
  title: titles[3]
});
var infowindow3 = new google.maps.InfoWindow({
  content: content[3]
});
marker3.addListener('click', function() {
  infowindow3.open(map, marker3);
});
}
