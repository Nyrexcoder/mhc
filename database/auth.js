// page preloder code
const preloder = document.getElementById('pageLoding')
function pageLoding(){
  preloder.style.display='none';
}

// signUp form
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
  document.getElementById("loding").style.display = "block";
  e.preventDefault();
const name = signupForm['name'].value;
const email = signupForm['email'].value;
const password = signupForm['password'].value;
const confirmPassword = signupForm['ConfirmPassword'].value;

if(password==confirmPassword){
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    alert("signUp Successfully");
    document.getElementById("loding").style.display = "none";
    location.reload();
    signupForm.reset();
  }).catch(function(error){
    alert(error);
    document.getElementById("loding").style.display = "none";
    const errorcode = error.code;
    const errormsg = error.message;
  });
}
else{
  alert("password did not Match")
}
});

// Login form
function login(){
  document.getElementById("loding").style.display = "block";
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const Uemail = loginForm['Uemail'].value;
    const Upassword = loginForm['Upassword'].value;
  
    firebase.auth().signInWithEmailAndPassword(Uemail, Upassword)
    .then((userCredential) => {
      // Signed in
      // alert("User Login Successfully")
      document.getElementById("loding").style.display = "none";
      window.location.replace('../logout.html');
      loginForm.reset("");
      window.history.forward();
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
    alert(error);
      document.getElementById("loding").style.display = "none";
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  });
}

// Login with google funciton
function goolelog(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    window.location.replace("/logout.html");
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    alert(error)
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}




// Forget password
function forgetPassword(){
  const email = document.getElementById('Uemail').value;
if(email != ""){
  document.getElementById("loding").style.display = "block";
  auth.sendPasswordResetEmail(email)
  .then(() => {
    document.getElementById("loding").style.display = "none";
    alert("Please cheack your email Password reset email sent!");
    loginForm.reset("");
    // document.getElementById("loding").style.display = "none";
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    document.getElementById("loding").style.display = "none";
    alert(error)
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
else{
  alert("Please fill the email first!");
}
}
