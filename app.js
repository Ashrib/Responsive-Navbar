
function signIn() {
    if (modal.style.display=="none"){
                modal.style.display = "block";
    }
    else{
        modal.style.display = "none";
    }
};
function closeMod() {
    modal.style.display="none";
};

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
        alert("Welcome " + userName);
        console.log("Username: " + userName);
        console.log("Email: " +email);
        console.log("Password: " +password);
    }
    else {
        nameError.innerText = "Only letters are allowed!";
    }
};

function showPass() {
    var state = false;
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        state = false;
    }
    else{
        document.getElementById("password").setAttribute("type", "text");
        state = true;
    }
};