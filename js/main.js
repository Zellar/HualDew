document.addEventListener("DOMContentLoaded", function() {
    try {
        const splide = new Splide( '.top-slider', {
            perPage: 1,
            type: 'fade',
            classes: {
                prev  : 'splide__arrow--prev splide__arrow--gold-arrow',
                next  : 'splide__arrow--next splide__arrow--gold-arrow',
            },
            rewind: true,
            breakpoints: {
                768: {
                    arrows: false,
                }
            },
    
        } );
        splide.mount();
    }
    catch {
        
    }

    try {
        const splide = new Splide( '.speakers_slider', {
            perPage: 1,
            loop: false,
            type: 'slide',
            classes: {
                prev  : 'splide__circle-arrow-left',
                next  : 'splide__circle-arrow-right',
            },
            rewind: false,
            pagination: false,
    
        } );
        splide.mount();
    }
    catch {
        
    }

    try {
        
        const main = new Splide( '#product_main-slider', {
            type      : 'fade',
            rewind    : true,
            pagination: false,
            arrows    : false,
        } );

        const thumbnail = new Splide( '#product_thumbnail', {
            rewind: true,
            pagination: false,
            arrows: false,
            fixedWidth: 160,
            fixedHeight: 160,
		    gap: 35,
            focus: 'center',
            isNavigation: true,
            breakpoints: {
                1240: {
                    fixedWidth: 130,
                    fixedHeight: 130,
                },
                991: {
                    fixedWidth: 90,
                    fixedHeight: 90,
                },
                768: {
                    fixedWidth: 170,
                    fixedHeight: 170,
                    gap: 25,
                },
                576: {
                    fixedWidth: '30%',
                    fixedHeight: '30%',
                    gap: '5%',
                },
            },
    
        } );

        main.sync( thumbnail );
        main.mount();
        thumbnail.mount();
    }
    catch {
        
    }

    try {
        const collectionSlider = new Splide( '.collection_slider', {
            perPage: 3,
            type: 'slide',
            height: "900px",
            loop: true,
            pagination: false,
            classes: {
                prev  : 'splide__arrow--prev splide__arrow--gold-arrow',
                next  : 'splide__arrow--next splide__arrow--gold-arrow',
            },
            breakpoints: {
                1240: {
                    perPage: 2,
                },
                991: {
                    height: "800px",
                },
                768: {
                    height: "650px",
                },
                576: {
                    height: "650px",
                    perPage: 1,
                },
                425: {
                    height: "550px",
                },
            },
    
        } );
        collectionSlider.mount();
    }
    catch {
        
    }

    try {
        const educationCitySelect = new BVSelect({
            selector: "#selectbox",
            width: "100%",
            offset: false,
            searchbox: true,
            offset: true,
            placeholder: "Выбрать город",
            search_placeholder: "Найти...",
            search_autofocus: true,
        });

        educationCitySelect.Update();
    }
    catch {

    }

    try {
        const informationTabs = tabs({
            el: '#information_tabs',
            tabNavigationLinks: '.tabs-list_item',
            tabContentContainers: '.tab-content'
        });

        informationTabs.init();
    }
    catch {

    }

    // Мобильное меню
  let mobBtn = document.querySelector('.menu');
  let mobMenuLinks = document.querySelectorAll('.header__nav a');
  let mobMenu = document.querySelector('.header_nav');
  let header = document.querySelector('header');
  let menuList = document.querySelector('.header_nav-list');

//   let noScroll = () => {
//     let body = document.querySelector('body');
//     let html = document.querySelector('html');
//     if (mobBtn.classList.contains('active')) {
//         body.style.overflowY = 'hidden';
//         html.style.overflowY = 'hidden';
//     } else {
//         body.style.overflowY = 'auto';
//         html.style.overflowY = 'auto';
//     }
// };

    let openMobMenu = (btn, menu, menuLinks, header, menuList,) => {
      
      document.addEventListener('click', (e) => {
          if(e.target === btn) {
              btn.classList.toggle('active');
              menu.classList.toggle('active');
          } else if (!header.contains(e.target)) {
            btn.classList.remove('active');
            menu.classList.remove('active');
            console.log(e.target);
          }
      });
     
  };

  openMobMenu(mobBtn, mobMenu, mobMenuLinks, header, menuList);

    

    autosize(document.querySelectorAll('textarea'));
})