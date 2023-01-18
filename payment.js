

//  document.getElementById('card-buttun').addEventListener('click', ()=>{

//      document.getElementById('credit-card').style.display = 'block'
//      document.querySelector('.card').style.display='none'
// })

// document.getElementById('card2').addEventListener('click', ()=>{

//     document.getElementById('credit-card').style.display = 'none'
//     document.querySelector('.card').style.display='block'
//     document.querySelector('.card2').style.display='none'
// })


window.onload = function (){
    const menu_bar = document.querySelector("#card-buttun")
    const menu_items = document.querySelector("#credit-card");
 
    menu_bar.addEventListener("click", function(){
 
       menu_bar.classList.toggle("is-active");
    //    menu_items.classList.toggle("is-active");
    })
 }