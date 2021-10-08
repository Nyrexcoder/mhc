// page preloder code
const preloder = document.getElementById('loding')
function pageLoding(){
  preloder.style.display='none';
}


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// signUp form

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
  e.preventDefault();

  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  const cpass = signupForm['password2'].value;
  const name = signupForm['name'].value;

if(password==cpass){
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    alert("signUp Successfully");
    // const id = firebase.auth().currentUser.uid;
    // firebase.database().ref('Users/'+id).set({
    //   name:name,
    //   email:email,
    // });
    location.reload();
    signupForm.reset();

  }).catch(function(error){
    swal("Something went wrong!", "You have not Registerd please Re-cheack email and password!", "error");
    // alert("You have not login please Re-cheack email and password!")
    const errorcode = error.code;
    const errormsg = error.message;
  });
}else{
  swal("Something went wrong!", "Password are not matching!", "error");
}
});


// Login form

const loginForm = document.querySelector('#login-form');

function login(){
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const Uemail = loginForm['Uemail'].value;
    const Upassword = loginForm['Upassword'].value;
  
    auth.signInWithEmailAndPassword(Uemail, Upassword).then(cred =>{
      swal("Success", "You are login Successfully", "success");
      alert("User login Successfully")
      // location.replace.href="";
      window.location.replace('../logout.html');
      loginForm.reset();
      window.history.forward();
      function noBack()
      {
          window.history.forward();
      }
    }).catch(function(error){
      swal("Something went wrong!", "You have not login please Re-cheack email and password!", "error");
      // alert("You have not login please Re-cheack email and password!")
      const errorcode = error.code;
      const errormsg = error.message;
    });
  })

}
// Login with google funciton
async function loginWithGoogle(){
  try{
    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth()
    .signInWithPopup(provider)
    alert(result)
  }catch(error){
    alert(error);
  }
}


// Logout form
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    alert("user Logout successfully")
  });
});

// Forget password
document
.querySelector("#forgot-password")
.addEventListener("click", () => {
    const email = document.querySelector("#login-email").value;
    if (email.trim() == "") {
    alert("Enter Email");
    } else {
    forgotPassword(email);
    }
});

const forgotPassword = (email) => {
auth
    .sendPasswordResetEmail(email)
    .then(function () {
    alert("email sent");
    })
    .catch(function (error) {
    alert("invalid email or bad network connection");
    });
};
//signup eye
var state = false;
function toggle2(){
  if(state){
    document.getElementById("password2").setAttribute("type" ,
    "password");
    document.getElementById("S-eye").style.color='#7a797e';
    state = false;
  }
  else{
    document.getElementById("password2").setAttribute("type" ,
    "text");
    document.getElementById("S-eye").style.color='#5887ef';
    state = true;
  }
}

// login eye
var state = false;
function toggle(){
  if(state){
    document.getElementById("Upassword").setAttribute("type" ,
    "password");
    document.getElementById("eye").style.color='#7a797e';
    state = false;
  }
  else{
    document.getElementById("Upassword").setAttribute("type" ,
    "text");
    document.getElementById("eye").style.color='#5887ef';
    state = true;
  }
}

// Loding Button code



