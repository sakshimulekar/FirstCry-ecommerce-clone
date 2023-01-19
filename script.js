

var slideIndex = 1;
   
  showSlides(slideIndex);
   
  function plusSlides(n){
    showSlides(slideIndex += n);
  }

  function currentSlide(n){
    showSlides(slideIndex = n);
  }

  function showSlides(n){
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1}
    if (n < 1) { slideIndex = slides.length}
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  var slideIndex = 0;
  showSlides();

  function showSlides(){

    var slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
      }
      slideIndex++;
      if(slideIndex > slides.length){
        slideIndex = 1;
      }
     slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000);
  }

  const navbar = document.querySelector('#navbar');
  const closeMenu = document.querySelector('.closeMenu');
  const openMenu = document.querySelector('.openMenu');

  openMenu.addEventListener('click',show);
  closeMenu.addEventListener('click',close);

  function show(){
    navbar.style.display='flex';
    navbar.style.top = '0';
  }
  function close(){
    navbar.style.top='-110%';
  }