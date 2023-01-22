
function openpage(){
  var x = document.getElementById("search").value;

  if(x === "boy" || x === "Boy" || x === "BOY"){
    window.open("/boy.html");
  }
  else if (x === "girl" || x === "Girl" || x === "GIRL"){
    window.open("/girl.html");
  }
  else if (x === "kids" || x === "Kids" || x === "KIDS"){
    window.open("/toddler.html");
  }
  else if(x === "footwear" || x === "Footwear" || x === "FOOTWEAR"){
    window.open("/footwear.html");
  }else{
    alert("Wrong Input");
  }
}

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

  let displayname = document.getElementById("displayname");
   
  let username = JSON.parse(localStorage.getItem("username"));
  displayname.innerText = username;
  console.log(username);
  let displayname1 = document.getElementById("displayname1");
   
  
  displayname1.innerText = username;
  console.log(username);