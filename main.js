let section = document.querySelector(".three")
let progress = document.querySelectorAll(".progress span");
let arrProg = Array.from(progress)

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 150) {
        arrProg.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
};
// ofsetTop to know from where to start the animation