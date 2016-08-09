  // Initialize Firebase
var config = {
	apiKey: "AIzaSyAShrzKJOhDWwNDGy8_CxEm-0Jj7hZE2kM",
	authDomain: "zika-project-f48f8.firebaseapp.com",
	databaseURL: "https://zika-project-f48f8.firebaseio.com",
	storageBucket: "zika-project-f48f8.appspot.com",
	};

 window.onload= function(){
 	firebase.initializeApp(config);
 }


var url = "https://zika-project-f48f8.firebaseio.com/Trap_Collection_Form";

var firebaseRef = new Firebase(url);



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








