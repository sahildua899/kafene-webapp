var checkLogin = JSON.parse(localStorage.getItem('userLoggedIn'));
if(checkLogin !== true) {
    location.assign('/index.html')
}