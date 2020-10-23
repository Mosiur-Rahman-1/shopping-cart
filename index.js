                    // phone event listner

// plus button event

var plusBtn = document.getElementById ("plus-btn");
plusBtn.addEventListener ("click", function () {

    var phoneInput = document.getElementById ("product-number").value;
    var phoneInputNumber = parseInt(phoneInput);
    var productNumberUpdate = phoneInputNumber + 1;
    document.getElementById ("product-number").value = productNumberUpdate;

    //updating phone price
    var phonePrice = document.getElementById ("phone-price").innerText;
    var phonePriceNumber = parseInt (phonePrice);
    var totalPrice = 100 * productNumberUpdate;
    document.getElementById ("phone-price").innerText = totalPrice;

    // updating subtotal
    var subtotalBalance = document.getElementById ("subtotal-balance").innerText;
    var subtotalBalanceNumber = parseInt (subtotalBalance);
    var subtotalBalanceFinal = totalPrice;
    document.getElementById ("subtotal-balance").innerText = subtotalBalanceFinal;

    //total balance update
    var totalBalance = document.getElementById ("total-balance").innerText;
    console.log(totalBalance);

})

// Minus button event

var minusBtn = document.getElementById ("minus-btn");
minusBtn.addEventListener("click", function () {

    var phoneInputMinus = document.getElementById ("product-number").value;
    var phoneInputMinusNumber = parseInt (phoneInputMinus);
    var productNumberUpdate =  phoneInputMinusNumber - 1;
    document.getElementById ("product-number").value = productNumberUpdate;

    // Updating and make the price less 
    var phonePrice = document.getElementById ("phone-price").innerText;
    var phonePriceNumber = parseInt (phonePrice);
    var totalPrice = productNumberUpdate * 100;
    document.getElementById ("phone-price").innerText = totalPrice;

    // updating subtotal
    var subtotalBalance = document.getElementById ("subtotal-balance").innerText;
    var subtotalBalanceNumber = parseInt (subtotalBalance);
    var subtotalBalanceFinal = totalPrice;
    document.getElementById ("subtotal-balance").innerText = subtotalBalanceFinal;
})

