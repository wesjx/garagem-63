class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

function handleWhatsAppButtonClick(event) {
  const button = event.target;
  const number = "+5562993998724"; 
  const message = encodeURIComponent(button.getAttribute('data-message'));
  const url = `https://api.whatsapp.com/send?phone=${number}&text=${message}`;
  window.location.href = url;
}

const buttons = document.querySelectorAll('#btn-whatsapp');
buttons.forEach(function(button) {
  button.addEventListener('click', handleWhatsAppButtonClick);
});

//                                        Swiper configuration

let swiper = new Swiper(".slide-content", {

  spaceBetween: 25,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centerSlide: true,
  fade: true,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 0,
          nextEl: false,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 0,
      },
  },
});