
var firebaseConfig = {
    apiKey: "AIzaSyAYb_VCyN7Zt5874VyJr2gDfNku_xXTo8U",
    authDomain: "practice-a86a8.firebaseapp.com",
    databaseURL: "https://practice-a86a8-default-rtdb.firebaseio.com",
    projectId: "practice-a86a8",
    storageBucket: "practice-a86a8.appspot.com",
    messagingSenderId: "58718799225",
    appId: "1:58718799225:web:b89648f8172a449f191ba8",
    measurementId: "G-7CWTX2MBMF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
       purpose : "add user"  
      });
  }