import "./styles/style.less";
import "../src/styles/js/menuBtn.js"
 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 import 'swiper/less';
 import 'swiper/less/navigation';
 import 'swiper/less/pagination';

var swiper_catalog = new Swiper('.swiper_catalog', {
    modules: [Navigation],

    
    // Optional parameters
    spaceBetween: 16,
    breakpointsBase: 'window',
    // If we need pagination
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
    breakpoints: {
      
      420:{
        slidesPerView: 2,
      },
      
      980: {
        
        slidesPerView: 3,
        
      },

      1240: {
        
        slidesPerView: 4,
        
      },
      
      1440: {
        slidesPerView: 4,
        
      },
      
      
      },
  }
    
)
    
    var swiper = new Swiper(".swiper_gallery", {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next-gallery",
        prevEl: ".swiper-button-prev-gallery",
      },
    })
    
    
    
    ;
    
