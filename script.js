const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sideMenu.classList.toggle("open");
});

// زر الإغلاق داخل المنيو
closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  hamburger.classList.remove("active");
});

// إغلاق المنيو لما المستخدم يضغط على أي رابط فيها
document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

// إغلاق المنيو لو ضغط المستخدم خارجها
document.addEventListener("click", (e) => {
  const isClickInsideMenu = sideMenu.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);
  if (!isClickInsideMenu && !isClickOnHamburger) {
    sideMenu.classList.remove("open");
    hamburger.classList.remove("active");
  }
});

// إرسال الفورم زي ما كان
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح!");
});






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



    