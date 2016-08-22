// <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js">

var config = {
    apiKey: "AIzaSyAShrzKJOhDWwNDGy8_CxEm-0Jj7hZE2kM",
    authDomain: "zika-project-f48f8.firebaseapp.com",
    databaseURL: "https://zika-project-f48f8.firebaseio.com",
    storageBucket: "zika-project-f48f8.appspot.com",
    };


var uiConfig = {
    'signInSuccessUrl': 'DataPageFirebase.html',
    'signInOptions': [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

 window.onload= function(){
    firebase.initializeApp(config);    
    firebaseInit();
 };


function firebaseInit() {
	console.log("here");
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) { // User is signed in.
            user = user;
            console.log(user);
            user.getToken().then(function(accessToken) {
                console.log('signed in');
            });
        } else { // User is signed out.
            user = null;
            console.log('signed out');
        }
    }, function(error) {
        console.log(error);
    });
};

function googleSignout() {
    // sign out 
   firebase.auth().signOut()
   // redirect to login page

   //  tell me in console if it worked
   .then(function() {
        window.location = "login.html";
        console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}




