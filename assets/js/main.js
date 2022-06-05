const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== PRELOADER ===============*/
const preloader = document.getElementById("preloader");

//wait after 3 seconds to show the preloader
setTimeout(() => {
  preloader.style.display = "none";
}, 3000);

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
//get all sections that have and id defined
const sections = document.querySelectorAll("section[id]");

//add event listener for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
  //get the current scroll position
  let scrollY = window.pageYOffset;

  //loop through all the sections and get the height, top and id of each section
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    //if the scroll position is greater than the section top and less than the section height + top
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      //add the active class to the section
      document.querySelector(`a[href="#${sectionId}"]`).classList.add("active-link");
    }else{
      //remove the active class from the section
      document.querySelector(`a[href="#${sectionId}"]`).classList.remove("active-link");
    }
  });
};

/*=============== PORTFOLIO ITEM FILTER ===============*/
const portfolio_items_container = document.querySelector(".portfolio-items-container");

console.log(portfolio_items_data);

//loop through all the portfolio items and add them to the DOM
portfolio_items_data.forEach((item) => {
  const portfolio_item = document.createElement("div");
  portfolio_item.classList.add("portfolio-item");
  portfolio_item.classList.add("padd-15");
  portfolio_item.setAttribute("data-category", item.category);
  portfolio_item.innerHTML = `
    <div class="portfolio-item-inner">
      <div class="portfolio-item-thumbnail">
        <img src="${item.img}" alt="${item.title}">
        <div class="mask"></div>
      </div>
      <span class="term">${item.category}</span>
      <h3 class="portfolio-item-title">${item.title}</h3>
      <a href="${item.url}" target="_blank">
        <span class="more-button">&hellip;</span>
      </a>
    </div>
  `;

  portfolio_items_container.appendChild(portfolio_item);
});

const filterContainer = document.querySelector(".portfolio-filter-inner"),
  filterBtns = filterContainer.children,
  totalFilterBtns = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolioItems = portfolioItems.length;

for (let i = 0; i < totalFilterBtns; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    
    for (let i = 0; i < totalPortfolioItems; i++) {

      if (filterValue === "all") {
        portfolioItems[i].classList.remove("hide");
        portfolioItems[i].classList.add("show");
      } else {
        if(filterValue === portfolioItems[i].getAttribute("data-category")){
          portfolioItems[i].classList.remove("hide");
          portfolioItems[i].classList.add("show");
        } else {
          portfolioItems[i].classList.remove("show");
          portfolioItems[i].classList.add("hide");
        }
      }
    }
  });
}

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
