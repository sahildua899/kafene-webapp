const menuItems = document.getElementsByClassName('menu-item');
const logoutBtn = document.getElementById('logout-btn')


const checkLogin = JSON.parse(localStorage.getItem('userLoggedIn'));
   if(checkLogin == true) {
       location.assign('/Html/orders.html');
   } else {
        logoutBtn.style.display = "none";
   }

   

  