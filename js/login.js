$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD6161AdrDJTtlO92MZuJsapJZQ5CgrdFI",
        authDomain: "ffwed-96ba1.firebaseapp.com",
        databaseURL: "https://ffwed-96ba1.firebaseio.com",
        projectId: "ffwed-96ba1",
        storageBucket: "ffwed-96ba1.appspot.com",
        messagingSenderId: "632610385940"
    };
    firebase.initializeApp(config);
                  
    var dbRef = firebase.database().ref().child('object');
                  
    const $email = $('#email');
    const $password = $('#password');
    const $btnSignIn = $('#btnSignIn');
    const $btnSignUp = $('#btnSignUp');
    const $btnSignOut = $('#btnSignOut');
    // Hovershadow
    
    $btnSignIn.click(function(e){
        const email = $email.val();
        const pass = $password.val();
        const auth = firebase.auth();
        // signIn
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(function(e){
                      
        });
                     window.location.href = './task-zh.html';
                                   
     });
    
    $btnSignOut.click(function(){
        firebase.auth().signOut();
    });
                  
    $btnSignUp.click(function(e){
        const email = $email.val();
        const pass = $password.val();
        const auth = firebase.auth();
        // signUp
        const promise = auth.createUserWithEmailAndPassword(email, pass);
                     
        promise.catch(function(e){
           
        });
         window.location.href = './task-zh.html';            
    });
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user) {
           // console.log(user);
        } else {
            console.log("not logged in")
        }
                
    });
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

