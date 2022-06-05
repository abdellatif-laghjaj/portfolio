const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*=============== SHOW MENU ===============*/
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

/*============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU ON CLICK LINK ===============*/
const navLinks = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //when we click on a link we want to remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => {
  link.addEventListener("click", linkAction);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.getElementById("theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

//open modal
const openModal = () => {
  themeModal.style.display = "grid";
};

//close modal
const closeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

theme.addEventListener("click", openModal);
themeModal.addEventListener("click", closeModal);
/*===== FONTS =====*/

//remove active class from all font sizes
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", function () {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "12px";
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "14px";
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "18px";
    }

    //change font size of the root element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

/*===== PRIMARY COLORS =====*/

//remove active class from all colors
const removeColorSelector = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", function () {
    removeColorSelector();
    let primaryHue;

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 127;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 49;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 229;
    }

    //set the primary color
    root.style.setProperty("--primary-color-hue", primaryHue);
    color.classList.toggle("active");
  });
});

/*===== THEME BACKGROUNDS =====*/
let lightColorLigthness;
let darkColorLigthness;
let whiteColorLigthness;

//change background color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLigthness);
  root.style.setProperty("--dark-color-lightness", darkColorLigthness);
  root.style.setProperty("--white-color-lightness", whiteColorLigthness);
};

bg1.addEventListener("click", function () {
  //add active class to the clicked element
  bg2.classList.add("active");

  //remove active class from the other elements
  bg1.classList.remove("active");
  bg3.classList.remove("active");

  //remove customizations
  window.location.reload();
});

//change background color
bg2.addEventListener("click", function () {
  darkColorLigthness = "95%";
  lightColorLigthness = "15%";
  whiteColorLigthness = "20%";

  //add active class to the clicked element
  bg2.classList.add("active");

  //remove active class from the other elements
  bg1.classList.remove("active");
  bg3.classList.remove("active");

  //change background color
  changeBG();
});

bg3.addEventListener("click", function () {
  darkColorLigthness = "95%";
  lightColorLigthness = "10%";
  whiteColorLigthness = "0%";

  //add active class to the clicked element
  bg3.classList.add("active");

  //remove active class from the other elements
  bg1.classList.remove("active");
  bg2.classList.remove("active");

  //change background color
  changeBG();
});