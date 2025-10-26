
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

// 🔹 Close Top Black Banner


var closeBtn = document.getElementById("closeBanner")
var banner = document.getElementById("topBanner")

var arrival = document.getElementById("arrival")
var targetSection = document.getElementById("newarrival")

var wanted = document.getElementById("wanted")
var targetSection1 = document.getElementById("mostwanted")

closeBtn.addEventListener("click", function () {
    banner.style.opacity = "0"
    banner.style.transform = "translateY(-20px)"
    banner.style.transition = "all 0.5s ease"
    setTimeout(function () {
        banner.style.display = "none"
    }, 500)
})


// 🔹 Select checkboxes
var summerCheckbox = document.getElementById("summer")
var winterCheckbox = document.getElementById("winter")
var partyCheckbox = document.getElementById("party")

// 🔹 Select all products
var products = document.querySelectorAll(".product")

// 🔹 Function to filter products
function filterProducts() {
    // Determine which filters are active
    var showSummer = summerCheckbox.checked
    var showWinter = winterCheckbox.checked
    var showParty = partyCheckbox.checked

    products.forEach(function (product) {
        var type = product.getAttribute("data-type")
        // Show if matches any selected filter
        if ((type === "summer" && showSummer) ||
            (type === "winter" && showWinter) ||
            (type === "party" && showParty) ||
            (!showSummer && !showWinter && !showParty)) {
            product.style.display = "block"
        }
        else {
            product.style.display = "none"
        }
    })
}

// 🔹 Add event listeners to checkboxes
summerCheckbox.addEventListener("change", filterProducts)
winterCheckbox.addEventListener("change", filterProducts)
partyCheckbox.addEventListener("change", filterProducts)
