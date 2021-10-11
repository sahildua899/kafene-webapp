$(document).ready(function() { 
var orderCounter = document.getElementById('order-count');
var orderContent = document.getElementById('order-content');

var orderClick = document.getElementById('order');
orderClick.classList.add('green');

$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', function(orderDetails) {
    for(var i=0; i<=orderDetails.length ; i++){
    var createRow = document.createElement('tr');
    createRow.id = "table-row";
    var columnId = document.createElement('td');
    columnId.innerHTML+=orderDetails[i].id;
    var columnName = document.createElement('td');
    columnName.innerHTML += orderDetails[i].customerName;
    var columnDate = document.createElement('td');
    columnDate.innerHTML += orderDetails[i].orderDate;
    var columnAmount = document.createElement('td');
    columnAmount.innerHTML+="$"+ orderDetails[i].amount;
    var columnStatus = document.createElement('td');
    columnStatus.innerHTML += orderDetails[i].orderStatus;
    
    createRow.appendChild(columnId);
    createRow.appendChild(columnName);
    createRow.appendChild(columnDate);
    createRow.appendChild(columnAmount);
    createRow.appendChild(columnStatus);
    orderContent.appendChild(createRow)
    }
})

// Filters
var newOrder = $("#new")
newOrder[0].onchange = function() {
    var tableRow = $(".order-table tr");
  for(var i=0; i<tableRow.length; i++) {
      var tableData = tableRow[i].getElementsByTagName("td")[4];
      if(tableData) {
          var tableText = tableData.textContent || tableData.innerText;
          if(tableText.toUpperCase() == 'NEW') {
              if(newOrder[0].checked == true) {
                  tableRow[i].style.display = "";
              }else {
                  tableRow[i].style.display = "none";
              }
          }
      }
      var orderCount = 1;
      for(j=2; j<tableRow.length; j++) {
          if(tableRow[j].style.display == "none") {
              ;
          }else {
              orderCount++;
          }
      }
      orderCounter.innerHTML = orderCount;
  }
}

// Packed Order

var packedOrder = $('#packed');
packedOrder[0].onchange = function() {
    var tableRow = $('.order-table tr');
    for (var i =2; i<tableRow.length; i++) {
        var tableData = tableRow[i].getElementsByTagName("td")[4];
        if(tableData) {
            var tableText = tableData.textContent || tableData.innerText;
            if(tableText.toUpperCase() == 'PACKED') {
                if(packedOrder[0].checked == true) {
                    tableRow[i].style.display = "";
                }else {
                    tableRow[i].style.display = "none";
                }
            }
        }
        var orderCount = 1;
        for(var j=2; j<tableRow.length; j++) {
            if(tableRow[j].style.display == "none") {
                ;
            } else {
                orderCount++
            }
        }
        orderCounter.innerHTML = orderCount
    }
}

// In Transit

var transitOrder = $('#inTransit');
transitOrder[0].onchange = function() {
    var tableRow = $('.order-table tr');
    for(var i=2; i<tableRow.length; i++) {
        var tableData = tableRow[i].getElementsByTagName("td")[4];
        if(tableData) {
            var tableText = tableData.innerText || tableData.textContent;
            if(tableText.toUpperCase() == 'INTRANSIT') {
                if(transitOrder[0].checked == true){
                    tableRow[i].style.display = "";
                }else {
                    tableRow[i].style.display = "none";
                }
            }
        }
        var orderCount = 1;
        for(var j=2; j<tableRow.length; j++) {
            if(tableRow[j].style.display == "none") {
                ;
            }else {
                orderCount ++
            }
        }
        orderCounter.innerHTML = orderCount;
    }
}

// Delivered
var deliveredOrder = $('#delivered');
deliveredOrder[0].onchange = function() {
    var tableRow = $('.order-table tr');
    for(var i=2; i<tableRow.length; i++) {
        var tableData = tableRow[i].getElementsByTagName("td")[4];
        if(tableData) {
            var tableText = tableData.innerText || tableData.textContent;
            if(tableText.toUpperCase() == 'DELIVERED') {
                if(deliveredOrder[0].checked == true){
                    tableRow[i].style.display = "";
                }else {
                    tableRow[i].style.display = "none";
                }
            }
        }
        var orderCount = 1;
        for(var j=2; j<tableRow.length; j++) {
            if(tableRow[j].style.display == "none") {
                ;
            }else {
                orderCount ++
            }
        }
        orderCounter.innerHTML = orderCount;
    }
}



});