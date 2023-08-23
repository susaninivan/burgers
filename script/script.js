
const title = document.getElementsByClassName("main-titel")[0]

console.log(title)
console.dir(title)
// title.style.color = "red" 

const buttonMenu = document.getElementById("menu")
buttonMenu.onclick = function () {
    //alert("test")
    links
}

const links = document.querySelectorAll('.menu-item > a')

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" })
    }
}

const buttons = document.getElementsByClassName("product-button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" })
    }
}

const burger = document.getElementById("burger")
const name = document.getElementById("name")
const phone = document.getElementById("phone")

document.getElementById('order-action').onclick = function () {
    let hasError = false;
    [burger, name, phone].forEach(function (item) {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        }
        else {
            item.parentElement.style.background = "";
        }
    })

    if (!hasError) {
        [burger, name, phone].forEach(function (item) { 
            item.value = "";
        })
        alert("Спасибо за заказ")

    }
}
const prices = document.getElementsByClassName("products-item-price")

document.getElementById("change-currency").onclick = function(e) {
    let currentCurrency = e.target.innerText
    let newCurrency = "$"
    let coefficient = 1
    if(currentCurrency === "$" )  {
        newCurrency = "₴";
        coefficient = 40;
    }

    else if (currentCurrency === "₴") {
        newCurrency = "€";
        coefficient = 1,9;
    
   
}
e.target.innerText = newCurrency
for ( let i = 0; i < prices.length; i++ ) {
prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + "" + newCurrency
}
}