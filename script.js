
const sideMenu = document.getElementById("sideMenu");









// سليدر
const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;
    const totalSlides = slides.length;

    // إنشاء المؤشرات
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");

    function showSlide(index, direction = 'right') {
      slides.forEach((slide, i) => {
        slide.classList.remove("active", "slide-in-left", "slide-in-right");
        if (i === index) {
          slide.classList.add("active");
          slide.classList.add(direction === 'right' ? "slide-in-right" : "slide-in-left");
          // بعد انتهاء الحركة، احذف الكلاس عشان تقدر تعيد الحركة عند التغيير مرة تانية
          setTimeout(() => {
            slide.classList.remove("slide-in-left", "slide-in-right");
          }, 800);
        }
      });
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex, 'right');
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex, 'left');
    }

    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
    });
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
    });

    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        const newIdx = Number(e.target.dataset.index);
        const dir = newIdx > currentIndex ? 'right' : 'left';
        currentIndex = newIdx;
        showSlide(currentIndex, dir);
        stopAutoSlide();
      });
    });

    // تشغيل تلقائي
    let autoSlide = setInterval(nextSlide, 5000);
    function stopAutoSlide() { clearInterval(autoSlide); }



// تشغيل و مميزات overlay
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlayImage");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlayDescription = document.getElementById("overlayDescription");
  const closeOverlay = document.getElementById("closeOverlay");
  const overlayPrev = document.getElementById("overlayPrev");
  const overlayNext = document.getElementById("overlayNext");

  const projectData = Array.from(cards).map(card => ({
    img: card.querySelector("img").src,
    title: card.querySelector("h3").textContent,
    desc: card.querySelector("p").textContent,
  }));

  let currentIndex = 0;

  function openOverlay(index) {
    const project = projectData[index];
    overlayImage.src = project.img;
    overlayTitle.textContent = project.title;
    overlayDescription.textContent = project.desc;
    overlay.style.display = "flex";
    currentIndex = index;
  }

  function closeOverlayFunc() {
    overlay.style.display = "none";
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => openOverlay(index));
  });

  closeOverlay.addEventListener("click", closeOverlayFunc);

  overlayPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projectData.length) % projectData.length;
    openOverlay(currentIndex);
  });

  overlayNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projectData.length;
    openOverlay(currentIndex);
  });
});

