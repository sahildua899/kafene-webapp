$(document).ready(function() { 

    var productClick = document.getElementById('products');
    productClick.classList.add('green');

    var productCounter = document.getElementById('product-count');
    var productContent = document.getElementById('product-content');

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', function(productData) {
        for(var i=0; i<productData.length; i++) {
            var createRow = document.createElement('tr');
        createRow.id = "table-row";
        var columnId = document.createElement('td');
        columnId.innerHTML+=productData[i].id;
        var columnName = document.createElement('td');
        columnName.innerHTML += productData[i].medicineName;
        var columnBrand = document.createElement('td');
        columnBrand.innerHTML += productData[i].medicineBrand;
        var columnExpiry = document.createElement('td');
        columnExpiry.innerHTML+= productData[i].expiryDate;
        var columnPrice = document.createElement('td');
        columnPrice.innerHTML += productData[i].unitPrice;
        var columnStock = document.createElement('td');
        columnStock.innerHTML+=productData[i].stock;
        
        createRow.appendChild(columnId);
        createRow.appendChild(columnName);
        createRow.appendChild(columnBrand);
        createRow.appendChild(columnExpiry);
        createRow.appendChild(columnPrice);
        createRow.appendChild(columnStock)
        productContent.appendChild(createRow)
        }
    })

    // Filters

    // Expired One
    var Expired = $('#expired');
    Expired[0].onchange = function() {
        var tableRow = $(".product-table tr");
        for(var i=0; i<tableRow.length; i++) {
            var tableData = tableRow[i].getElementsByTagName('td')[3];
            var currentDate = new Date().getFullYear()
            if(tableData) {
                var tableText = tableData.textContent || tableData.innerText;
                if(tableText[1] <currentDate) {
                    if(Expired[0].checked == true ) {
                        tableRow[i].style.display = ""
                    } else {
                        tableRow[i].style.display = "none"
                    }
                }
            }
            var productCount = 0;
            for(j=2; j<tableRow.length; j++) {
                if(tableRow[j].style.display == "none") {
                    ;
                }else {
                    productCount++
                }
            }
            productCounter.innerHTML = productCount;
        }
    }

    // Low Stock One

    var lowStock = $("#lowstock");
    lowStock[0].onchange = function() {
        var tableRow = $('.product-table tr');
        for(var i=0; i<tableRow.length; i++) {
            var tableData = tableRow[i].getElementsByTagName('td')[5];
            if(tableData) {
                var tableText = tableData.textContent|| tableData.innerText;
                if(tableText < 300) {
                    if(lowStock[0].checked == true) {
                        tableRow[i].style.display = ""
                    } else {
                        tableRow[i].style.display = "none"
                    }
                }
            }
            var productCount = 1;
            for(var j = 2; j<tableRow.length;j++) {
                if(tableRow[j].style.display == "none") {
                    ;
                } else {
                    productCount++
                }
            }
            productCounter.innerHTML = productCount;
        }
    }
})