var map;
function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
	    center: {lat: 37.557419, lng: -121.989398},
	    zoom: 11
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
		var title = Trap_Collection_Form[keys].date_Set;
		var body = ", position: " + Trap_Collection_Form[keys].position_Type + ", Species Found: " + Trap_Collection_Form[keys].egg_Species
		var contents = title + body;
		// console.log(contents);
		// console.log(position);
		addmarkers(position, title, contents);
	};
}

var url = "https://zika-project-f48f8.firebaseio.com/Trap_Collection_Form";

var firebaseRef = new Firebase(url);

function addmarkers(positionval, title, content){
	var marker = new google.maps.Marker({
	  position: positionval,
	  map: map,
	  title: title
});
	var infowindow = new google.maps.InfoWindow({
	  content: content
	});
	marker.addListener('click', function() {
	  infowindow.open(map, marker);
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
  








