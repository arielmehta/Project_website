  // Initialize Firebase

var config = {
	apiKey: "AIzaSyAShrzKJOhDWwNDGy8_CxEm-0Jj7hZE2kM",
	authDomain: "zika-project-f48f8.firebaseapp.com",
	databaseURL: "https://zika-project-f48f8.firebaseio.com",
	storageBucket: "zika-project-f48f8.appspot.com",
	};



firebase.initializeApp(config);
var ref = new Firebase("https://zika-project-f48f8.firebaseio.com/");

// var trap_type = document.getElementById('trap_type').value; //User Input

// window.onload= function(){
	if(document.getElementById('button')){
		document.getElementById('button').addEventListener("click", writeUserData('trap_type').value);
	}
	
// }

// writeUserData('trap_type').value;

function writeUserData(trap_type) {
	console.log("push started");
	ref.push(document.getElementById('trap_type').value);
    console.log("database updated");
        }






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