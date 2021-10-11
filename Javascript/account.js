var loginBtn = document.getElementById('login-btn');
const enteredUsername = document.getElementById('username');
const enteredPassword = document.getElementById('password');

var logoutBtn = document.getElementById('logout-btn');

const checkLogin = JSON.parse(localStorage.getItem('userLoggedIn'));

if(checkLogin == true) {
    location.assign('/Html/order.html');
}else {
    logoutBtn.style.display = "none"
}

loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(enteredUsername.value == "" || enteredPassword.value == "") {
        alert("Please enter Username and password")
    }else if (enteredUsername.value !== enteredPassword.value) {
        alert("Please Enter a Valid Password")
    } else {
        const Data = {username:enteredUsername, password:enteredPassword}
        var sendLogin = new XMLHttpRequest();
        sendLogin.open('POST', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login', true);
        sendLogin.onreadystatechange = function() {
            if(this.readyState == 4) {
                alert('Login Sucessfull');
                localStorage.setItem('userLoggedIn', JSON.stringify(true));
                location.assign('/Html/order.html');
            }
        }
        sendLogin.setRequestHeader("Content-Type", "application/json;Charset=UTF-8");
        sendLogin.send(JSON.stringify(Data))
    }
    }
)
