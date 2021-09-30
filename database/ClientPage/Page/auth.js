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
  const name = signupForm['name'].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    alert("signUp Successfully");
    location.reload();
    signupForm.reset();

    var id = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+id).set({
      name:name,
      email:email,
    });
  })
})

// Login form

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const Uemail = loginForm['Uemail'].value;
  const Upassword = loginForm['Upassword'].value;

  auth.signInWithEmailAndPassword(Uemail, Upassword).then(cred =>{
    alert("User login Successfully")
    window.location.href="logout.html";
    loginForm.reset();
  })
})

// Logout form
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    alert("user Logout successfully")
  });
});


//signup eye
var state = false;
function toggle(){
  if(state){
    document.getElementById("password").setAttribute("type" ,
    "password");
    document.getElementById("S-eye").style.color='#7a797e';
    state = false;
  }
  else{
    document.getElementById("password").setAttribute("type" ,
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


