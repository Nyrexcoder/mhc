function gstR(count){
    document.getElementById('purpose').value=count;
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

  // contact form validation

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
  