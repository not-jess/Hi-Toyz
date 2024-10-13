var dropDown = document.querySelector(".navbutton");
var dropDownDiv = document.querySelector("#nav");
dropDown.addEventListener("click", function(){
dropDownDiv.classList.toggle('show-nav');
});

// function zoom(img){
//     document.getElementById('zoomed').innerHTML = img;
// }

let email = "";
let password = "";

let form1 = document.getElementById('register-form');
form1, addEventListener('submit', function(e) {
    let name = document.getElementById('name');
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    let cpass = document.getElementById('cpass');
    let bday = document.getElementById('bday');
    let terms = document.getElementById('terms');

    this.document.getElementById('name-error').innerHTML="";
    this.document.getElementById('email-error').innerHTML="";
    this.document.getElementById('password-error').innerHTML="";
    this.document.getElementById('cpass-error').innerHTML="";
    this.document.getElementById('terms-error').innerHTML="";

    if(name.value==""||email==""||password==""||cpass.value==""||bday.value==""||terms.value==""){
        this.document.getElementById('terms-error').innerHTML
        ="<p>Please fill out all the fields</p>";
        e.preventDefault();
    } else if(name.value.length<3){
        this.document.getElementById('name-error').innerHTML
        ="<p>Name should be at least 3 characters long</p>";
        e.preventDefault();
    } else if (password.length < 8) {
        this.document.getElementById('password-error').innerHTML
        ="<p>Password should be at least 8 characters long</p>";
        e.preventDefault();
    } else if (password != cpass.value) {
        this.document.getElementById('cpass-error').innerHTML
        ="<p>Password does not match.</p>";
        e.preventDefault();
    } else if (!terms.checked) {
        this.document.getElementById('terms-error').innerHTML
        ="<p>Please agree to the terms and regulations.</p>";
        e.preventDefault();
    } 
});


let form2 = document.getElementById('login-form');
form2, addEventListener('submit', function(e) {

    let loginEmail = document.getElementById('login-email');
    let loginPassword = document.getElementById('login-password');

    this.document.getElementById('login-email-error').innerHTML="";
    this.document.getElementById('login-password-error').innerHTML="";

    if(loginEmail.value==""){
        this.document.getElementById('login-email-error').innerHTML
        ="<p>Please input an email.</p>";
        e.preventDefault();
    } else if(loginPassword.value==""){
        this.document.getElementById('login-password-error').innerHTML
        ="<p>Please input a password.</p>";
        e.preventDefault();
    } else if((loginEmail.value != email) || (loginPassword.value != password)){
        this.document.getElementById('login-password-error').innerHTML
        ="<p>Email and password does not match.</p>";
        e.preventDefault();
    } 
});