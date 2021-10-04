// page preloder code
const preloder = document.getElementById('loding')
function pageLoding(){
  preloder.style.display='none';
}



/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Services

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});



//............................................................//

// Pass value click to input tag

function gstR(count){
  document.getElementById('purpose').value=count;
}

// read more and read less button
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// confirm box
const send = document.querySelector('.send');

send.addEventListener('click', (e)=>{
  if (confirm("Are you sure to submit your form ?") == true) {
    userPreference = "form succesfully submited";
} else {
  alert("form not submit !");
  e.preventDefault(); 
}
});

//form validation

function clearErrors(){
  errors = document.getElementsByClassName('formerror');
  for(let item of errors){
    item.innerHTML = "";
  }
}

function validation(){
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phoneNo').value;

  var usercheck = /^[A-Za-z. ]{3,30}$/;
  var emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var phonecheck = /^[789][0-9]{9}$/

  if(usercheck.test(username)){
    document.getElementById('usernameerror').innerHTML = " ";
  }else{
    document.getElementById('usernameerror').innerHTML = "** Username is Invalid!";
    return false;
  }

  if(emailcheck.test(email)){
    document.getElementById('emailerror').innerHTML = " ";
  }else{
    document.getElementById('emailerror').innerHTML = "** Email is Invalid!";
    return false;
  }


  if(phonecheck.test(phone)){
    document.getElementById('phoneNoerror').innerHTML = " ";
  }else{
    document.getElementById('phoneNoerror').innerHTML = "** Phone No. is Invalid!";
    return false;
  }

}




