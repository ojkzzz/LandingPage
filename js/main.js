$(document).ready(function () {
  jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-9999");
  });
});

function makeAnimationInProjects() {
  const listItems = document.querySelectorAll(".projects ul li");
  const textInImg = document.querySelector(".projects__content__image2 > div");
  const projectImg2 = document.querySelector(".projects__content__image2 img");
  const projectImgs = document.querySelectorAll(".projects__content > div");
  listItems.forEach((el) => {
    el.addEventListener("click", function () {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("white");
        textInImg.style.opacity = 0;
        textInImg.style.visibility = "hidden";
        projectImg2.style.opacity = 1;
      }
      el.classList.add("white");
    });
  });

  function clickFirstLine() {
    listItems[0].addEventListener("click", function () {
      projectImgs.forEach((el) => {
        el.classList.remove("displayNone");
      });
    });
  }

  function clickSecondLine() {
    listItems[1].addEventListener("click", function () {
      projectImgs.forEach((el) => {
        el.classList.remove("displayNone");
      });

      projectImgs[3].classList.add("displayNone");
      projectImgs[4].classList.add("displayNone");
      projectImgs[5].classList.add("displayNone");
    });
  }

  function clickThirdLine() {
    listItems[2].addEventListener("click", function () {
      projectImgs.forEach((el) => {
        el.classList.remove("displayNone");
      });

      projectImgs[0].classList.add("displayNone");
      projectImgs[1].classList.add("displayNone");
      projectImgs[2].classList.add("displayNone");
    });
  }

  clickFirstLine();
  clickSecondLine();
  clickThirdLine();
}

makeAnimationInProjects();

function scrollToTop() {
  const triangle = document.querySelector(".footer__img");
  triangle.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

scrollToTop();

function burgerActive() {
  const burger = document.querySelector(".burger");
  const logo = document.querySelector(".header__logo");
  const header = document.querySelector("header");
  const nav = document.querySelector(".designerMobile nav");
  const contactMe = document.querySelector(".designerMobile__contactMe");
  const body = document.querySelector("body");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    logo.classList.toggle("active");
    header.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("disabledBody");
  });

  contactMe.addEventListener("click", function () {});
}
burgerActive();

/* ---------------------------------------------------------------------- */

function getScreenWidth() {
  let screenWidth = window.screen.width;
  return screenWidth;
}

function changeTextInItberries() {
  const itBerriesText = document.querySelector(".itberries__readMore");
  const resumeAboutMeText = document.querySelector(".resume__aboutMe__text");
  const contactTopText = document.querySelector(".contact__top__text p");
  if (getScreenWidth() <= 382) {
    itBerriesText.textContent = "MORE";
    resumeAboutMeText.innerHTML = `
    <p>My name is Tomasz Gajda, I'm a third year Applied Computer Science student at the AGH University of Science and Technology in Krakow. I have been learning Front-End technologies for a year and this time was just enough for me to make sure that this is my place in the industry.</p>
    <p>Membership in the science club developed my design skills, which quickly turned into a new hobby. I am fluent in English (spoken and written) and intermediate Spanish. Apart from designing and programming websites, my passion is all kinds of motorsport - from rallies to the very king of motorsport - formula 1.</p>`;
    contactTopText.innerHTML = `My name is Oleg Platunov, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. `;
  }
}

changeTextInItberries();
