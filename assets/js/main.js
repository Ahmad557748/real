

// للقائمة الجوال
let mobile_nav_icon = document.getElementById('mobile-nav-icon');
let aside = document.getElementById('aside');


mobile_nav_icon.addEventListener('click' , function(){
    if (aside.style.right == '0px'){
        aside.style.right = "-250px";
    }
    else{
        aside.style.right = "0px";
    }
});
// للقائمة الجوال وقت نضغط وين ما كان بتسكر

document.addEventListener('click' , function(event){
    if (!aside.contains(event.target) && event.target !== mobile_nav_icon){
      aside.style.right = "-250px";
    }

});




// للتنقل بين الصور

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-back',
    prevEl: '.btn-next',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});





