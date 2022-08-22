const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,

  spaceBetween: 30,

  //some coments

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    382: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,

      spaceBetween: 30,
    },
    543: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    703: {
      slidesPerView: 2.2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    954: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },
  },

  // And if we need scrollbar
});
function burgerUse() {
  burger = document.getElementById("header__burger");
  burger.classList.toggle("active-burger");
  headerNav = document.getElementById("header__nav");
  headerNav.classList.toggle("header-active");
  bodyLock = document.getElementById("body");
  bodyLock.classList.toggle("body-lock");
}

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight =
      document.querySelector(".header__container").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

(function () {
  burger = document.getElementById("header__burger");
  menu = document.getElementById("header__nav");
  const menuChooseItem = document.querySelectorAll(".header__nav-link");
  bodyLock = document.getElementById("body");

  for (var i = 0; i < menuChooseItem.length; i++) {
    menuChooseItem[i].addEventListener("click", () => {
      console.log("DICK");
      burger.classList.remove("active-burger");
      menu.classList.remove("header-active");
      bodyLock.classList.remove("body-lock");
    });
  }
})();
