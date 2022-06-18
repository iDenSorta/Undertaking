let menuBtn = document.querySelector('.menu-btn-header');
let menuWrapper = document.querySelector('.menu-wrapper');

menuBtn.addEventListener('click',function(){
  menuBtn.classList.toggle('active');
  menuWrapper.classList.toggle('active');

} )

