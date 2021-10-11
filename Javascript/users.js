$(document).ready(function() { 
    var value = ""
    var userClick = document.getElementById('users');
    userClick.classList.add('green');

    var userContent= document.getElementById('user-content');
    var searchedUser = document.getElementById('tab');

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', function(usersData) {
        for(var i=0; i<usersData.length; i++) {
            var createRow = document.createElement('tr');
            createRow.id = "table-row";
            var columnId = document.createElement('td');
            columnId.innerHTML+=usersData[i].id;
            var columnAvatar = document.createElement('img');
            columnAvatar.src += usersData[i].profilePic;
            var columnName = document.createElement('td');
            columnName.innerHTML += usersData[i].fullName;
            var columnDob = document.createElement('td');
            columnDob.innerHTML+= usersData[i].dob;
            var columnGender = document.createElement('td');
            columnGender.innerHTML += usersData[i].gender;
            var columnLocation = document.createElement('td');
            columnLocation.innerHTML+=usersData[i].currentCity + ' '+ usersData[i].currentCountry;
            
            createRow.appendChild(columnId);
            createRow.appendChild(columnAvatar);
            createRow.appendChild(columnName);
            createRow.appendChild(columnDob);
            createRow.appendChild(columnGender);
            createRow.appendChild(columnLocation)
            userContent.appendChild(createRow)
        }
    })

    // Search Section Starts Here
    $('#search-input').on("keypress", function(){
        if(event.keyCode === 13) {
            value = $('#search-input').val().toUpperCase();
            $('.user-table').addClass("hide");
            if(value.length <= 2) {
                alert('Enter More than two values')
            } else {
                $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=" + value, function(userData) {
                    for(var i=0; i<userData.length; i++) {
                        var createRow = document.createElement('tr');
                        createRow.id = "table-row";
                        var columnId = document.createElement('td');
                        columnId.innerHTML+=userData[i].id
                        var columnAvatar = document.createElement('img');
                        columnAvatar.src += userData[i].profilePic;
                        var columnName = document.createElement('td');
                        columnName.innerHTML += userData[i].fullName;
                        var columnDob = document.createElement('td');
                        columnDob.innerHTML+= userData[i].dob;
                        var columnGender = document.createElement('td');
                        columnGender.innerHTML += userData[i].gender;
                        var columnLocation = document.createElement('td');
                        columnLocation.innerHTML+=userData[i].currentCity + ' '+ userData[i].currentCountry;
                        
                        createRow.appendChild(columnId);
                        createRow.appendChild(columnAvatar);
                        createRow.appendChild(columnName);
                        createRow.appendChild(columnDob);
                        createRow.appendChild(columnGender);
                        createRow.appendChild(columnLocation)
                        searchedUser.appendChild(createRow)
                    }
                } )
            }
        }
        $("#reset-btn").click(function() {
            value = null;
            $("#tab").empty()
            $(".user-table").removeClass("hide")
        })
    })
})