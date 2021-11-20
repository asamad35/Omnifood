///////////////////// copyright date
const yearEl = document.querySelector(".year");
yearEl.innerText = new Date().getFullYear();

///////////////////// Make mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////// Smooth Scrolling
// css html wala tareeqa doesnt work on safari browser

const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scoll back to top
    if (href === "#") {
      // scroll by pixel
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    }
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // scroll to the section
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // root:null means viewport
    root: null,
    // threshold: 0 means the callBack function will run when 0% of target Element is in the viewPort. (jb poora hero section scroll down krlenge)
    threshold: 0,
    rootMargin: "-80px",
  }
);
// sectionHeroEl is the target for IntersectionObserver
obs.observe(sectionHeroEl);
