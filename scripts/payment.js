let lsData = JSON.parse(localStorage.getItem('userdata')) || [];

// SET DATA IN STOREAGE/// <= AND GET FROM STORAGE =>/////
let cartdata = JSON.parse(localStorage.getItem('add-to-cart'));
let price;
 cartdata.map((item) =>{
   price = item.price;
 })

document.getElementById('cod-btn').innerText = 'PLACED COD ₹ '+ price;
document.getElementById('card-btn').innerText = 'PAY NOW ₹ '+ price;
document.getElementById('upi-btn').innerText = 'PAY NOW ₹ '+ price;
document.getElementById('ptm-btn').innerText = 'PAY NOW ₹ '+ price;
document.getElementById('net-btn').innerText = 'PAY NOW ₹ '+ price;

//// POPUP FUNCTION /////
let pop = document.querySelector('.popup');
let proccess = document.querySelector('.header');
let text = document.querySelector('h6');


/// <= FUNCTION FOR PROCCESSING => /////
function proccessData(){

   setTimeout((time) => {
      // proccess.style.display = 'block';
      text.style.display = 'none'
   }, 1500)

   setTimeout((el) => {
      pop.style.display = 'block'
   }, 2000)

   proccess.style.display = 'none'
   text.style.display = 'block'
}


   // CREDIT/DEBIT CARD LIST //
   document.getElementById('card-buttun').addEventListener('click', ()=>{

   document.getElementById('upi').style.display = 'none'
   document.getElementById('paytm').style.display = 'none'
   document.getElementById('net-info').style.display = 'none'
   document.getElementById('cod-info').style.display = 'none'

   const showcard = document.getElementById('credit-card')
   if(showcard.style.display === 'none') {
      showcard.style.display = 'block'
      showcard.style.paddingLeft = '7px'
      document.getElementById('angel').style.transform = "rotate(180deg)";
   } else {
      showcard.style.display = 'none'
      document.getElementById('angel').style.transform = "rotate(0deg)";
   }
 })

 // UPI LIST SHOW ///
 document.getElementById('upi-head').addEventListener('click', ()=>{

   document.getElementById('credit-card').style.display = 'none'
   document.getElementById('paytm').style.display = 'none'
   document.getElementById('net-info').style.display = 'none'
   document.getElementById('cod-info').style.display = 'none'

   const showdiv = document.getElementById('upi')
   if(showdiv.style.display === 'none') {
      showdiv.style.display = 'block'
      showdiv.style.paddingLeft = '7px'
      document.getElementById('angel2').style.transform = "rotate(180deg)";
   } else {
      showdiv.style.display = 'none'
      document.getElementById('angel2').style.transform = "rotate(0deg)";
   }
 })

 //PAYTM LIST SHOW //
 document.getElementById('paytm-data').addEventListener('click', ()=>{

   document.getElementById('upi').style.display = 'none'
   document.getElementById('credit-card').style.display = 'none'
   document.getElementById('net-info').style.display = 'none'
   document.getElementById('cod-info').style.display = 'none'

   const shodata = document.getElementById('paytm')
   if(shodata.style.display === 'none') {
      shodata.style.display = 'block'
      shodata.style.paddingLeft = '7px'
      document.getElementById('angel3').style.transform = "rotate(180deg)";
   } else {
      shodata.style.display = 'none'
      document.getElementById('angel3').style.transform = "rotate(0deg)";
   }
 })

 //NETBANKING LIST SHOW ///
 document.getElementById('net-data').addEventListener('click', ()=>{

   document.getElementById('upi').style.display = 'none'
   document.getElementById('paytm').style.display = 'none'
   document.getElementById('credit-card').style.display = 'none'
   document.getElementById('cod-info').style.display = 'none'

   const shodata = document.getElementById('net-info')
   if(shodata.style.display === 'none') {
      shodata.style.display = 'block'
      shodata.style.paddingLeft = '7px'
      document.getElementById('angel4').style.transform = "rotate(180deg)";
   } else {
      shodata.style.display = 'none'
      document.getElementById('angel4').style.transform = "rotate(0deg)";
   }
 })

 // COD LIST SHOW ///
 document.getElementById('cod-data').addEventListener('click', ()=>{

   document.getElementById('upi').style.display = 'none'
   document.getElementById('paytm').style.display = 'none'
   document.getElementById('net-info').style.display = 'none'
   document.getElementById('credit-card').style.display = 'none'

   const shodata = document.getElementById('cod-info')
   if(shodata.style.display === 'none') {
      shodata.style.display = 'block'
      shodata.style.paddingLeft = '7px'
      document.getElementById('angel5').style.transform = "rotate(180deg)";
   } else {
      shodata.style.display = 'none'
      document.getElementById('angel5').style.transform = "rotate(0deg)";
   }
 })


// CREDIT/ DEBIT CARD DATA ///
document.getElementById('card-btn').addEventListener('click', creditData)
const checkdata= document.getElementById('checkbox')
function creditData(){
   event.preventDefault()

   var payobj = {
      cardName: document.getElementById('card-name').value,
      cardNum: document.getElementById('card-num').value,
      cardMonth: document.getElementById('month').value,
      cardYear: document.getElementById('year').value,
      cardCVV: document.getElementById('cvv').value
   }

   if(checkdata.checked && payobj.cardName !== "" 
      &&(payobj.cardNum!=='') && (payobj.cardCVV !=='') 
      && payobj.cardNum.length==16 && payobj.cardCVV.length==4 || payobj.cardCVV.length==3){
         lsData.push(payobj)
         proccessData()
         localStorage.setItem('paymentdata', JSON.stringify(lsData))
      }else {
      alert('check your check input')
   }
}

// UPI DATA //
document.getElementById('upi-btn').addEventListener('click', upiData)
function upiData(){

   event.preventDefault()
   let upiobj = {
      Id: document.getElementById('upi-input').value
   }
  lsData.push(upiobj);
   if(upiobj.Id !== ''){
      lsData.push(upiobj)
       proccessData()
      localStorage.setItem('paymentdata', JSON.stringify(lsData))
   }else {
      alert('something went wrong');
   }
}



// PAYTM DATA //
document.getElementById('link-btn').addEventListener('click', paytmData)
function paytmData(){

   event.preventDefault()

   let ptmobj = {
      id: document.getElementById('ptm-input').value
   }
   if(ptmobj.id == '' || ptmobj.id.length !== 10){
      alert('something went wrong');
   }
   else {
      lsData.push(ptmobj)
      localStorage.setItem('paymentdata', JSON.stringify(lsData))
   }
}


 document.getElementById('ptm-btn').addEventListener('click', function() {
   proccessData()

 })


// NET-BANKING DATA //
document.getElementById('net-btn').addEventListener('click', bankData)
function bankData(){
   event.preventDefault()
  
   let netobj = {
      data: document.getElementById('net-input').value
   }
   lsData.push(netobj)
   proccessData()
   localStorage.setItem('paymentdata', JSON.stringify(lsData))
}


// COD DATA //
document.getElementById('cod-btn').addEventListener('click', function() {
   proccessData()
})

document.getElementById('button').addEventListener('click', function() {
   
   window.location.href = "index.html";
})