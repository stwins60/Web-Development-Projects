const loginForm = document.getElementById("login-form");
function login(){
    const userName = loginForm.user.value;
    const psw = loginForm.pwd.value;

    console.log(userName + " " + psw);

    if(userName === " " || psw === " "){
        alert("Enter your Credentials");
    }
    else if(userName === "admin" && psw === "password"){
        alert("You have successfully logged in.");
        location = ('/index.html');
    }
    else{
        var display = document.createElement("p");
        display.innerHTML = "Wrong username or password";
        display.style.color = "black";
        display.style.fontSize ="20px";
        document.body.appendChild(display);
    }
}