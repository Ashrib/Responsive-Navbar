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
var signUp_btn = document.getElementById("signup-btn");
var logIn_btn = document.getElementById("login-btn");

function changeTab(a) {
    if(a === "1") {
        signTabContent.style.display = "none";
        logTabContent.style.display = "block";
        logTab.style.background = "#a4b3c4";
        signTab.style.background = "#828e9b";
        signUp_btn.style.display = "none"
        logIn_btn.style.display = " block"
    }
    else if(a === "2") {
        logTabContent.style.display = "none";
        signTabContent.style.display = "block";
        logTab.style.background = "#828e9b";
        signTab.style.background = "#a4b3c4";
        signUp_btn.style.display = "block"
        logIn_btn.style.display = " none"
    }
}

function submit(b) {
    // variables for login
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email-inp").value;
    var password = document.getElementById("password").value;
    // variables for signup
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var signupEmail = document.getElementById("signup-email").value;
    var signupPass = document.getElementById("create-password").value;

    // -----on login btn-----
    if(b === "log") {
        userName = userName.replace(/\s\s+/g, " ");
        email = email.replace(/\s\s+/g, "");
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
        };
    }
    // ------on signup btn------
    else if(b === "sign") {
        firstName = firstName.replace(/\s\s+/g, " ");
        lastName = lastName.replace(/\s\s+/g, " ");
        signupEmail = signupEmail.replace(/\s\s+/g, "");
        signupPass = signupPass.replace(/\s\s+/g, "");

        var fnError =  document.getElementById("fn-error");
        fnError.style.transition = "2s";
        fnError.style.color = "red";
        var lnError =  document.getElementById("ln-error");
        lnError.style.transition = "2s";
        lnError.style.color = "red";
        var signEmailError =  document.getElementById("eml-error-s"); 
        signEmailError.style.transition = "2s";
        signEmailError.style.color = "red";
        var signPassError =  document.getElementById("pass-error-s");
        signPassError.style.transition = "2s";
        signPassError.style.color = "red";

        if (firstName.length <= 1) {
            fnError.innerText= "Your firstname must contain more than one character";
        }
        else if(lastName.length <= 1) {
                  lnError.innerText="Your lastname must contain more than one character"
        }
        else if(signupPass.length <= 1 || signupPass.length < 6) {
            signPassError.innerText="Password must contain more than 6 or less than 15 characters"
        }
        //---------- email validation --------
        const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex_pattern.test(signupEmail)) {
            signEmailError.innerText = "";
        }
        else {
            signEmailError.innerText = "Your email address is not valid !";
            return false
        };
        var letters = /^[A-Za-z]+$/;

        if(firstName.match(letters)) {
            console.log("Full name: " + firstName + " " +lastName);
            console.log("Email: " +signupEmail);
            console.log("Password: " +signupPass);
        }
        else {
            fnError.innerText = "Only letters are allowed!";
        };
    }
    
};
// -----hide or show password--------
var state = false;
function showPass(c) {
    if(c === "l"){
        if(state){
            document.getElementById("password").setAttribute("type", "password");
            state = false;
        }
        else{
            document.getElementById("password").setAttribute("type", "text");
            state = true;
        }
    }
    else{
        if(state){
            document.getElementById("create-password").setAttribute("type", "password");
            state = false;
        }
        else{
            document.getElementById("create-password").setAttribute("type", "text");
            state = true;
        }
    }
};