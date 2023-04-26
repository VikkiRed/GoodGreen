"use strict"

const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  },
};

//--------BURGER-MENU--------//

  const burgerMenu = document.querySelector('.header__menu__hamburger');
  const menuBody = document.querySelector ('.header__nav__menu__list');
    if(burgerMenu) {
      burgerMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
      });
    }
    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (burgerMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burgerMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        }
      }
      
  const menuLinks = document.querySelectorAll('.header__menu__link');
  if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });
  }
    

//SWIPER-1
  const swiper1 = new Swiper('.swiper1', {
    
    direction: 'horizontal',
    loop: false,

    
    pagination: {
      el: '.swiper-pagination1',
      type: 'bullets',
      clickable: true,
    },

    effect: 'slide',

    breakpoints: {
      
       280: {
            slidesPerView: 1,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },

        650: {
            slidesPerView: 2,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        1036: {
        
            slidesPerView: 3,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        1330: {
            slidesPerView: 4,
            spaceBetween: 30,
            slideToClickedSlide: true,
        }
      }
  });


  //SWIPER-2
  const swiper2 = new Swiper('.swiper2', {
    
    direction: 'horizontal',
    loop: false,

    effect: 'slide',

    watchOverFlow:true,
    autoHeight:false,

    breakpoints: {
      
       280: {
            spaceBetween: 30,
            slideToClickedSlide: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            initialSlide: 2,
        },
       
        650: {
            spaceBetween: 30,
            slideToClickedSlide: false,
            slidesPerView: 'auto',
            centeredSlides: true,
            initialSlide: 1,
        },
       
    }
  });

  //SWIPER-3
  const swiper3 = new Swiper('.swiper3', {
    
    direction: 'horizontal',
    loop: false,

    
    pagination: {
      el: '.swiper-pagination3',
      type: 'bullets',
      clickable: true,
    },

    effect: 'slide',

    breakpoints: {
      
       280: {
            slidesPerView: 1,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },

        650: {
            slidesPerView: 2,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        1036: {
        
            slidesPerView: 3,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
            slideToClickedSlide: true,
        }
      }
  });



  /*----MODAL WINDOW-----*/

let btns = document.querySelectorAll(".changeYourLife__order__button");
let modal = document.querySelector(".modal");


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    modal.style.display = "block";
  });
}


let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


//Вывод стоимости товара

const productSelect = document.getElementById('product-select');
const totalCost = document.getElementById('total-cost');

productSelect.addEventListener('change', () => {
  const selectedValue = parseInt(productSelect.value);
  if (selectedValue > 0) {
    totalCost.textContent = `Цена: ${selectedValue} руб`;
  } else {
    totalCost.textContent = '';
  }
});




//ПРОМОКОД


function applyPromoCode() {
  let promoCode = document.getElementById("promo-code").value;
  if (promoCode === "1") {
    let selectElement = document.getElementById("product-select");
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    let originalPriceElement = selectElement.options[selectElement.selectedIndex];
    let originalPrice = selectedValue + " руб.";
    let totalPrice = selectedValue * 0.9; 
    document.getElementById("total-price").value = totalPrice + " руб.";
    document.getElementById("promo-message").innerHTML = "Скидка по промокоду 10%";
  } else {
    document.getElementById("total-price").value = ""; 
    document.getElementById("promo-message").innerHTML = "Промо-код недействителен";
  } 
}


//--SWIPER-4 FEEDBACK BLOCK

const swiper4 = new Swiper('.swiper4', {
    
  direction: 'horizontal',
  loop: false,

  
  pagination: {
    el: '.swiper-pagination4',
    type: 'bullets',
    clickable: true,
  },

  effect: 'slide',

  breakpoints: {
    
     280: {
          slidesPerView: 1,
          spaceBetween: 30,
          slideToClickedSlide: true,
               
      },

      650: {
          slidesPerView: 2,
          spaceBetween: 30,
          slideToClickedSlide: true,
      },
      
      1036: {
          slidesPerView: 3,
          spaceBetween: 30,
          slideToClickedSlide: true,
          grid: {
            rows: 2,
            columns: 3
          } 
      },
      
    }
});