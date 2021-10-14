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
  
  // after login search code
  function openPage(){
    var x = document.getElementById('search').value;
    if(x === "gst"){
      window.open("gstRegistration.html" ,"_parent");
    }
    else if(x === "gst registration"){
      window.open("gstRegistration.html" ,"_parent");
    }
    else if(x === "itr"){
      window.open("Return income Tax Filling.html" ,"_parent");
    }
    else if(x === "income tax"){
      window.open("Return income Tax Filling.html" ,"_parent");
    }
    else if(x === "income tax return"){
      window.open("Return income Tax Filling.html" ,"_parent");
    }
    else if(x === "company registration"){
      window.open("database/auth.html");
    }
    else if(x === "company"){
      window.open("database/auth.html");
    }
    else if(x === "book keeping"){
      window.open("database/auth.html");
    }
    else if(x === "digital signature"){
      window.open("database/auth.html");
    }
    else if(x === "financial advisory"){
      window.open("database/auth.html");
    }
    else if(x === "fssai"){
      window.open("database/auth.html");
    }
    else if(x === "FSSAI"){
      window.open("database/auth.html");
    }
    else if(x === "insurance advisory"){
      window.open("database/auth.html");
    }
    else if(x === "iso"){
      window.open("database/auth.html");
    }
    else if(x === "legal drafting"){
      window.open("database/auth.html");
    }
    else if(x === "msme"){
      window.open("database/auth.html");
    }
    else if(x === "pan"){
      window.open("database/auth.html");
    }
    else if(x === "PAN"){
      window.open("database/auth.html");
    }
    else if(x === "ROC Filling"){
      window.open("database/auth.html");
    }
    else if(x === "roc filling"){
      window.open("database/auth.html");
    }
    else if(x === "TAN"){
      window.open("database/auth.html");
    }
    else if(x === "tan"){
      window.open("database/auth.html");
    }
    else{
      alert("Page Not Found");
    }
  }