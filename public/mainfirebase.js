var map;
function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
	    center: {lat: 37.569957, lng: -121.954435},
	    zoom: 6
	});
}

var config = {
	apiKey: "AIzaSyAShrzKJOhDWwNDGy8_CxEm-0Jj7hZE2kM",
	authDomain: "zika-project-f48f8.firebaseapp.com",
	databaseURL: "https://zika-project-f48f8.firebaseio.com",
	storageBucket: "zika-project-f48f8.appspot.com",
	};

 window.onload= function(){
 	firebase.initializeApp(config);	
 };
window.onload= function(){
	for (var keys in Trap_Collection_Form){
		var lt = Trap_Collection_Form[keys].trap_Latitude;
		var lg = Trap_Collection_Form[keys].trap_Longitude;
		var latitude = Number(lt);
		var longitude = Number(lg);
		var position = {lat: latitude, lng: longitude};
		console.log(position);
		addmarkers(position, "test");
	};
}

var url = "https://zika-project-f48f8.firebaseio.com/Trap_Collection_Form";

var firebaseRef = new Firebase(url);

function addmarkers(positionval, title){
	var marker = new google.maps.Marker({
	  position: positionval,
	  map: map,
	  title: title
});
};

function writeUserData(){
	console.log("here");
	var trap_type = document.getElementById('trap_type').value; //User Input
	var Date_Set = document.getElementById('Date_Set').value; //User Input
	var Position_Type = document.getElementById('Position_Type').value; //User Input
	var Trap_Latitude = document.getElementById('Trap_Latitude').value; //User Input
	var Trap_Longitude = document.getElementById('Trap_Longitude').value; //User Input
	var Weather_Data = document.getElementById('Weather_Data').value; //User Input
	var Humidity = document.getElementById('Humidity').value; //User Input
	var Average_Rainfall = document.getElementById('Average_Rainfall').value; //User Input
	var Number_Eggs_Total = document.getElementById('Number_Eggs_Total').value; //User Input
	var Number_Egg_Rafts = document.getElementById('Number_Egg_Rafts').value; //User Input
	var Number_Individual_Eggs = document.getElementById('Number_Individual_Eggs').value; //User Input
	var Egg_Species = document.getElementById('Egg_Species').value; //User Input

	var postRef= firebaseRef.push();// creating form submission id
	postRef.set({                   //creating children data for each form submission
		Trap_type: trap_type,  
		date_Set: Date_Set, 
		position_Type: Position_Type,
		trap_Latitude: Trap_Latitude,
		trap_Longitude: Trap_Longitude,  
		weather_Data: Weather_Data,
		humidity: Humidity,
		average_Rainfall: Average_Rainfall,
		number_Eggs_Total: Number_Eggs_Total,
		number_Egg_Rafts: Number_Egg_Rafts,
		number_Individual_Eggs: Number_Individual_Eggs,
		egg_Species: Egg_Species
		}); 
}

var Trap_Collection_Form = {};

firebaseRef.on('value', function(snapshot){
	Trap_Collection_Form = snapshot.val();
});
  

// // google maps api stuff
// var trap_locations = [{lat: 37.569957, lng: -121.954435}, {lat:37.551280, lng: -121.971380}, {lat: 37.546347 , lng: -121.965937}, {lat: 37.543335, lng: -121.986439 }]
// var titles = ["Example_1", "Example_2", "Example_3", "Example_4"]

// var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Morrison Canyon Road</h1>'+
//       '<div id="bodyContent">'+ '<img src= "Images/hills.jpg"/>'+
//       '<p><b>Morrison Canyon Road Trap #1 </b> This is an example.'+
//       '</div>'+
//       '</div>';
// var content2 = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Fremont Main Library</h1>'+
//       '<div id="bodyContent">'+ '<img src= "Images/lib.jpg"/>'+
//       '<p><b>Fremont Main Library Trap #2 </b> This is an example. ' +
//       '</div>'+
//       '</div>';
// var content3 = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Central Park</h1>'+
//       '<div id="bodyContent">'+ '<img src= "Images/lake.jpg"/>'+
//       '<p><b>Central Park Trap #3 </b> This is an example. '+
//       '</div>'+
//       '</div>';
// var content4 = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading"> Fremont Hub </h1>'+
//       '<div id="bodyContent">'+ '<img src= "Images/tj.jpg"/>'+
//       '<p><b>Fremont Hub Trap #4 </b> This is an example.'+
//       '</div>'+
//       '</div>';

// var content = [contentString, content2, content3, content4]


// var marker0 = new google.maps.Marker({
//   position: trap_locations[0],
//   map: map,
//   title: titles[0]
// });
// var infowindow0 = new google.maps.InfoWindow({
//   content: content[0]
// });
// marker0.addListener('click', function() {
//   infowindow0.open(map, marker0);
// });


// var marker1 = new google.maps.Marker({
//   position: trap_locations[1],
//   map: map,
//   title: titles[1]
// });
// var infowindow1 = new google.maps.InfoWindow({
//   content: content[1]
// });
// marker1.addListener('click', function() {
//   infowindow1.open(map, marker1);
// });


// var marker2 = new google.maps.Marker({
//   position: trap_locations[2],
//   map: map,
//   title: titles[2]
// });
// var infowindow2 = new google.maps.InfoWindow({
//   content: content[2]
// });
// marker2.addListener('click', function() {
//   infowindow2.open(map, marker2);
// });

// // var marker3 = new google.maps.Marker({
// //   position: trap_locations[3],
// //   map: map,
// //   title: titles[3]
// // });
// // var infowindow3 = new google.maps.InfoWindow({
// //   content: content[3]
// // });
// // marker3.addListener('click', function() {
// //   infowindow3.open(map, marker3);
// // });







