// page preloder code
const preloder = document.getElementById('loding')
function pageLoding(){
  preloder.style.display='none';
}

function gstR(count){
    document.getElementById('purpose').value=count;
  }


  // confirm box
// const send = document.querySelector('.send');

// send.addEventListener('click', (e)=>{
//   if (confirm("Are you sure to submit your form ?") == true) {
//     userPreference = "form succesfully submited";
// } else {
//   alert("form not submit !");
//   e.preventDefault(); 
// }
// });


  // contact form validation

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

  // read more and read less
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
  
 // Before login search code
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
    window.open("B.L Company Registration.html" ,"_parent");
  }
  else if(x === "company"){
    window.open("B.L Company Registration.html" ,"_parent");
  }
  else if(x === "book keeping"){
    window.open("B.L Book Keeping.html" ,"_parent");
  }
  else if(x === "digital signature"){
    window.open("B.L Digital Signature.html" ,"_parent");
  }
  else if(x === "financial advisory"){
    window.open("B.L Financial Advisory.html" ,"_parent");
  }
  else if(x === "fssai"){
    window.open("B.L FSSAI.html" ,"_parent");
  }
  else if(x === "FSSAI"){
    window.open("B.L FSSAI.html" ,"_parent");
  }
  else if(x === "insurance advisory"){
    window.open("B.L Insurance Advisory.html" ,"_parent");
  }
  else if(x === "iso"){
    window.open("B.L ISO.html" ,"_parent");
  }
  else if(x === "legal drafting"){
    window.open("B.L Legal Drafting.html" ,"_parent");
  }
  else if(x === "msme"){
    window.open("B.L MSME Registration.html" ,"_parent");
  }
  else if(x === "pan"){
    window.open("B.L PAN.html" ,"_parent");
  }
  else if(x === "PAN"){
    window.open("B.L PAN.html" ,"_parent");
  }
  else if(x === "ROC Filling"){
    window.open("B.L ROC.html" ,"_parent");
  }
  else if(x === "roc filling"){
    window.open("B.L ROC.html" ,"_parent");
  }
  else if(x === "TAN"){
    window.open("B.L TAN.html" ,"_parent");
  }
  else if(x === "tan"){
    window.open("B.L TAN.html" ,"_parent");
  }
  else{
    alert("Page Not Found");
  }
}