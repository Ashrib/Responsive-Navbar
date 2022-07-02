var modal = document.getElementById("modal");
function signIn() {
    if (modal.style.display === "none"){
                modal.style.display = "flex";
    }
    else{
        modal.style.display = "none";
    }
};
function closeMod() {
    modal.style.display="none";
};

var logTab = document.getElementById("login-tab");
var signTab = document.getElementById("signup-tab");
var logTabContent = document.getElementById("log-in-content");
var signTabContent = document.getElementById("sign-up-content");

function changeTab(a) {
    if(a === "1") {
        signTabContent.style.display = "none";
        logTabContent.style.display = "block";
        logTab.style.background = "#a4b3c4";
        signTab.style.background = "#828e9b";
    }
    else if(a === "2") {
        logTabContent.style.display = "none";
        signTabContent.style.display = "block";
        logTab.style.background = "#828e9b";
        signTab.style.background = "#a4b3c4";
    }
}




function submit() {
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email-inp").value;
    var password = document.getElementById("password").value; 

    
    userName = userName.replace(/\s\s+/g, " ");
    email = email.replace(/\s\s+/g, " ");
    password = password.replace(/\s\s+/g, "");

    var nameError =  document.getElementById("n-error");
    nameError.style.transition = "2s";
    nameError.style.color = "red";
    var emailError =  document.getElementById("eml-error"); 
    emailError.style.transition = "2s";
    emailError.style.color = "red";
    var passError =  document.getElementById("pass-error");
    passError.style.transition = "2s";
    passError.style.color = "red";

    if (userName.length <= 1) {
        nameError.innerText= "Your name must contain more than one character";
    }
    else if(password.length <= 1 || password.length < 6) {
              passError.innerText="Password must contain more than 6 or less than 15 characters"
    }
    //---------- email validation --------
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email)) {
        emailError.innerText = "";
    }
    else {
        emailError.innerText = "Your email address is not valid !";
        return false
    };

    var letters = /^[A-Za-z]+$/;

    if(userName.match(letters)) {
        console.log("Username: " + userName);
        console.log("Email: " +email);
        console.log("Password: " +password);
    }
    else {
        nameError.innerText = "Only letters are allowed!";
    }
};

var state = false;
function showPass() {
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        state = false;
    }
    else{
        document.getElementById("password").setAttribute("type", "text");
        state = true;
    }
};