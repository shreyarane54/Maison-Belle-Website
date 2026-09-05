// =======================================
// GSAP REGISTER
// =======================================

gsap.registerPlugin(ScrollTrigger);


// =======================================
// LOADER ANIMATION
// =======================================

window.addEventListener("load", () => {

  const tl = gsap.timeline();

  tl.from(".loader-content h1", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  })

  .from(".loader-content p", {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, "-=0.6")

  .to(".loader", {
    y: "-100%",
    duration: 1.2,
    ease: "power4.inOut",
    delay: 0.4
  })

  .from(".hero-tag", {
    y: 50,
    opacity: 0,
    duration: 0.8
  }, "-=0.6")

  .from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1
  }, "-=0.5")

  .from(".hero-text", {
    y: 40,
    opacity: 0,
    duration: 0.8
  }, "-=0.7")

  .from(".hero-buttons .btn", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8
  }, "-=0.5")

  .from(".hero-image", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  }, "-=1")

  .from(".floating-card", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
  }, "-=0.8")

  .from(".stat", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
  }, "-=0.5");

});


// =======================================
// CUSTOM CURSOR
// =======================================

const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");

window.addEventListener("mousemove", (e) => {

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });

  gsap.to(cursorBlur, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5
  });

});


// =======================================
// CURSOR SCALE ON HOVER
// =======================================

document.querySelectorAll("a, button").forEach(el => {

  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 2,
      duration: 0.3
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.3
    });
  });

});


// =======================================
// MOBILE MENU
// =======================================

const hamburger =
  document.querySelector(".hamburger");

const mobileMenu =
  document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a")
.forEach(link => {

  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });

});


// =======================================
// STICKY NAVBAR EFFECT
// =======================================

window.addEventListener("scroll", () => {

  const navbar =
    document.querySelector(".navbar");

  if (window.scrollY > 80) {

    navbar.style.background =
      "rgba(255,255,255,0.85)";

    navbar.style.boxShadow =
      "0 15px 50px rgba(0,0,0,0.12)";

  } else {

    navbar.style.background =
      "rgba(255,255,255,0.65)";

    navbar.style.boxShadow =
      "0 15px 50px rgba(0,0,0,0.08)";

  }

});


// =======================================
// FLOATING PARTICLES
// =======================================

gsap.utils.toArray(".particle")
.forEach((particle, i) => {

  gsap.to(particle, {
    y: -30,
    x: 20,
    duration: 3 + i,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

});


// =======================================
// FLOATING CARDS
// =======================================

gsap.to(".review-card", {
  y: -25,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".service-card-float", {
  y: 20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


// =======================================
// HERO PARALLAX
// =======================================

gsap.to(".hero-image", {
  yPercent: 15,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".hero-circle", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


// SECTION TITLE
gsap.from(".features .section-heading", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".features",
    start: "top 75%"
  }
});


// CARDS
gsap.from(".feature-card", {
 
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".features-grid",
    start: "top 80%"
  }
});


// FLOATING ICONS
gsap.utils
.toArray(".feature-icon")
.forEach((icon, i) => {

  gsap.to(icon, {
    y: -10,
    duration: 2 + i * 0.3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

});

// =======================================
// ABOUT SECTION
// =======================================

gsap.from(".image-main", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  }
});

gsap.from(".image-small", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: .3,
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  }
});

gsap.from(".experience-card", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: .5,
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  }
});

gsap.from(".about-content > *", {
  y: 50,
  opacity: 0,
  stagger: .15,
  duration: .8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 75%"
  }
});


// =======================================
// SERVICES
// =======================================

gsap.from(".services .section-heading", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".services",
    start: "top 75%"
  }
});

gsap.from(".service-card", {
  y: 120,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 80%"
  }
});


gsap.utils
.toArray(".service-number")
.forEach(number => {

  gsap.to(number, {
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

});


// =======================================
// GALLERY REVEAL
// =======================================

gsap.from(".gallery .section-heading", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 75%"
  }
});

gsap.from(".gallery-item", {
  y: 120,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".gallery-grid",
    start: "top 80%"
  }
});


gsap.utils
.toArray(".gallery-item")
.forEach(item => {

  gsap.to(item.querySelector("img"), {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: item,
      scrub: true
    }
  });

});


// =======================================
// TESTIMONIALS
// =======================================

gsap.from(".testimonials .section-heading", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 75%"
  }
});

gsap.from(".testimonial-card", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".testimonial-slider",
    start: "top 80%"
  }
});


gsap.utils
.toArray(".testimonial-card")
.forEach(card => {

  gsap.to(card, {
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

});

// =======================================
// FAQ ANIMATION
// =======================================

gsap.from(".faq-item", {
  y: 50,
  opacity: 0,
  stagger: 0.12,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".faq-wrapper",
    start: "top 80%"
  }
});


// =======================================
// FAQ ACCORDION
// =======================================

const faqs =
  document.querySelectorAll(".faq-item");

faqs.forEach(item => {

  const question =
    item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqs.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");

  });

});


// =======================================
// NEWSLETTER ANIMATION
// =======================================

gsap.from(".newsletter-box", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".newsletter",
    start: "top 80%"
  }
});


// =======================================
// FOOTER
// =======================================

gsap.from(".footer-grid > div", {
  y: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%"
  }
});


// =======================================
// SMOOTH ANCHOR SCROLL
// =======================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener(
    "click",
    function (e) {

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (!target) return;

      window.scrollTo({
        top:
          target.offsetTop - 120,
        behavior: "smooth"
      });

    }
  );

});


// =======================================
// HERO MOUSE PARALLAX
// =======================================

const hero =
  document.querySelector(".hero");

hero.addEventListener(
  "mousemove",
  (e) => {

    const x =
      e.clientX /
      window.innerWidth;

    const y =
      e.clientY /
      window.innerHeight;

    gsap.to(".hero-image", {
      x: (x - 0.5) * 30,
      y: (y - 0.5) * 30,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.to(".hero-circle", {
      x: (x - 0.5) * 50,
      y: (y - 0.5) * 50,
      duration: 1.5,
      ease: "power3.out"
    });

  }
);


// =======================================
// REFRESH SCROLLTRIGGER
// =======================================

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});