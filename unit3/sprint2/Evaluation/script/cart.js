let cartData = JSON.parse(localStorage.getItem("cartItem"));

let item = document.getElementById("item");

function displayItem(cartData) {

    cartData.map(function (user, index) {
        let div = document.createElement("div");
        div.style.display = "inline-block"
        div.style.marginRight = "30px"
        div.style.marginLeft = "10px"


        let img = document.createElement("img");
        img.src = user.img;

        let name = document.createElement("div");
        name.innerHTML = user.name;

        let price = document.createElement("h3");
        price.textContent = user.price;

        let hr = document.createElement("hr");
        let remove = document.createElement("button")

        remove.textContent = "remove"
        remove.addEventListener("click", function () {
            remov(index);
        })

        div.append(img, name, price, remove, hr)
        item.append(div);


    })


}
displayItem(cartData)

function remov(index) {
    cartData.splice(index, 1);

    localStorage.setItem("cartItem", JSON.stringify(cartData));

    window.location.reload();
}


var total = cartData.reduce(function (acc, cv) {
    return acc + Number(cv.price)
}, 0);

document.getElementById("total").textContent = "₹ " + total;