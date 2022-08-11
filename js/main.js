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
