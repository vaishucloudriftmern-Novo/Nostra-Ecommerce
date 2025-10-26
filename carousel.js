// 🔹 Close Top Black Banner
console.log("✅ JS file is linked and running!")

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

// 🔹 Carousel Sliding
var slider = document.getElementById("slider")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var index = 0
var totalSlides = 3

next.addEventListener("click", function () {
    index = (index + 1) % totalSlides
    slider.style.transform = "translateX(-" + (index * 100) + "vw)"
})

prev.addEventListener("click", function () {
    index = (index - 1 + totalSlides) % totalSlides
    slider.style.transform = "translateX(-" + (index * 100) + "vw)"
})


arrival.addEventListener("click", function () {
    targetSection.scrollIntoView({ behavior: "smooth" })
})

wanted.addEventListener("click", function () {
    targetSection1.scrollIntoView({ behavior: "smooth" })
})

