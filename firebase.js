  // Initialize Firebase
var config = {
	apiKey: "AIzaSyAShrzKJOhDWwNDGy8_CxEm-0Jj7hZE2kM",
	authDomain: "zika-project-f48f8.firebaseapp.com",
	databaseURL: "https://zika-project-f48f8.firebaseio.com",
	storageBucket: "zika-project-f48f8.appspot.com",
	};



firebase.initializeApp(config);
// var ref = new Firebase("https://zika-project-f48f8.firebaseio.com/");


 window.onload= function(){
 	document.getElementById('button').addEventListener("click", writeUserData('trap_type').value);
 }
 	

// function to push data from form onto firebase

function writeUserData(trap_type, Date_Set, Position_Type, Trap_Latitude, Trap_Longitude, Weather_Data, Humidity, Average_Rainfall, Number_Eggs_Total, Number_Egg_Rafts, Number_Individual_Eggs, Egg_Species) {
            console.log("push started");
            firebase.database().ref('Trap_Collection_Form').push({
            	trap_type: trap_type,
            	Date_Set: Date_Set, 
            	Position_Type: Position_Type, 
            	Trap_Latitude: Trap_Latitude, 
            	Trap_Longitude: Trap_Longitude, 
            	Weather_Data: Weather_Data, 
            	Humidity: Humidity, 
            	Average_Rainfall: Average_Rainfall, 
            	Number_Eggs_Total: Number_Eggs_Total, 
            	Number_Egg_Rafts: Number_Egg_Rafts,
            	Number_Individual_Eggs: Number_Individual_Eggs, 
            	Egg_Species: Egg_Species
            });
            console.log("database updated");
        }



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


// $(function(){
//   //just make a variable to keep track of the data coming from Firebase
//   var data =[];
  
//   //create a new connection to firebase

	
//   //listen to data updates from firebase
//   ref.on("value", function(snapshot){
//     console.log(snapshot.val() );
//     //when data updates at Firebase, put it in the data variable
//     data = snapshot.val();
//   })



//   $('#Trap_Collection_Form').submit(function(event){
//     var $form = $(this);
//     console.log("submit to Firebase");

//     //make the submit disabled
//     $form.find("#saveForm").prop('disabled', true);

//     //get the actual values that we will send to firebase
//     var trapToSend = $('#trap_type').val();

//     console.log(trapToSend);

    
//     //take the values from the form, and put them in an object
//     var Trap_Collection_Form = {
//       "trap":trapToSend
//     }
//     //put the new object into the data array
//     data.push(Trap_Collection_Form);
//     console.log(data);
//     //send the new data to Firebase
// 		ref.set(data);

//     return false;
//   })
// })
