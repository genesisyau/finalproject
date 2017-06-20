$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCy9LgDgnMB8cy2bwhXTJIjnfK3-wxCxGw",
    authDomain: "day-5e631.firebaseapp.com",
    databaseURL: "https://day-5e631.firebaseio.com",
    projectId: "day-5e631",
    storageBucket: "day-5e631.appspot.com",
    messagingSenderId: "679788417967"
  };
  firebase.initializeApp(config);

  var dbRef = firebase.database().ref();
  // REGISTER DOM ELEMENTS
  var $messageField = $('#messageInput');
  var $messageList = $('#example-messages');
  // LISTEN FOR KEYPRESS EVENT
  $messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES

      var message = $messageField.val();
      console.log(message);

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      dbRef.push({text:message});
      $messageField.val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  dbRef.limitToLast(10).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();

    var message = data.text;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var $messageElement = $("<li>");
    var $nameElement = $("<strong class='example-chat-username'></strong>");

    $messageElement.text(message).prepend();

    //ADD MESSAGE
    $messageList.append($messageElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  });
});
