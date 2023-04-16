(function($) {

  "use strict";

  // Tab Section
  var initTabs = function(){
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });
  }


  // Responsive Navigation with Button
      var initHamburgerMenu = function() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".menu-list");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("responsive");
        }

        const navLink = document.querySelectorAll(".item-anchor");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("responsive");
        }
      };

    var swiper = new Swiper(".main-swiper", {
        speed: 1500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".product-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        999: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });


  $(document).ready(function(){
    Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
    })

    jQuery('.stellarnav').stellarNav({
      theme: 'plain',
      closingDelay: 250,
    });
  
  });  


// document ready
  $(document).ready(function(){
    initTabs();
    initHamburgerMenu();

    AOS.init({
      duration: 1200,
      once: true,
    })
      
  });

})(jQuery);