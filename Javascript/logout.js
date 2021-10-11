var logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('userLoggedIn');
    location.assign('/index.html');
})