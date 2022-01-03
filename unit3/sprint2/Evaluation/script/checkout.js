function checkout() {
    // window.location.reload();
    setTimeout(function () {
        alert("Your Order is Accepted");
    }, 3000)

    setTimeout(function () {
        alert("Your Order is Being Cooked");
    }, 8000)

    setTimeout(function () {
        alert("Your Order is Ready");
    }, 10000)

    setTimeout(function () {
        alert("Order out for Delivery");
        window.location.reload();
    }, 12000)

}