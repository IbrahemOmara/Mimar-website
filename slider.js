let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

window.addEventListener("scroll", function () {
    const header = document.getElementById("Header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});




// overlay

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".learn-more-btn").forEach(btn => {
btn.addEventListener("click", function () {
    modalTitle.textContent = this.getAttribute("data-title");
    modalDesc.textContent = this.getAttribute("data-description");
    modal.style.display = "flex";
});
});

closeModal.addEventListener("click", () => {
modal.style.display = "none";
});

window.addEventListener("click", (e) => {
if (e.target === modal) {
    modal.style.display = "none";
}
});