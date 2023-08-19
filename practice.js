var firebaseConfig = {
    apiKey: "AIzaSyDcVawwOrA50h_3NoWhdJlsY_v0-8nb3o4",
    authDomain: "kwitter-8a3f9.firebaseapp.com",
    databaseURL: "https://kwitter-8a3f9-default-rtdb.firebaseio.com",
    projectId: "kwitter-8a3f9",
    storageBucket: "kwitter-8a3f9.appspot.com",
    messagingSenderId: "41217380409",
    appId: "1:41217380409:web:64f43e927953a5fe21fde8"
  };
  
  // Initialize Firebase
  firebase.initializeApp = (firebaseConfig);
  function addUser() 
  { user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({ 
    purpose : "adding user" });
 }