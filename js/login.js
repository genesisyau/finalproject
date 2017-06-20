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
                     
    });
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user) {
            console.log(user);
        } else {
            console.log("not logged in")
        }
                
    });
});
