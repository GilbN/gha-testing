/*!
* Start Bootstrap - Creative v6.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click",(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=a(this.hash);if((e=e.length?e:a("[name="+this.hash.slice(1)+"]")).length)return anime({targets:"html, body",scrollTop:e.offset().top-72,duration:1e3,easing:"easeInOutExpo"}),!1}})),a(".js-scroll-trigger").click((function(){a(".navbar-collapse").collapse("hide")})),a("body").scrollspy({target:"#mainNav",offset:75});var e=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-scrolled"):a("#mainNav").removeClass("navbar-scrolled")};e(),a(window).scroll(e),a("#portfolio").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);
