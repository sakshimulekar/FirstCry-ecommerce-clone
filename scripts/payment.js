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


let lsData = JSON.parse(localStorage.getItem('userdata')) || [];

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
         localStorage.setItem('userdata', JSON.stringify(lsData))
      }else {
      alert('check your check input')
   }
}
document.getElementById('card-btn').innerText = 'PAY NOW ₹';

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
      localStorage.setItem('userdata', JSON.stringify(lsData))
   }else {
      alert('something went wrong');
   }
}
document.getElementById('upi-btn').innerText = 'PAY NOW ₹';


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
      localStorage.setItem('userdata', JSON.stringify(lsData))
   }
}


// document.getElementById('ptm-btn').addEventListener('click', function() {


// })
document.getElementById('ptm-btn').innerText = 'PAY NOW ₹';

// NET-BANKING DATA //
document.getElementById('net-btn').addEventListener('click', bankData)
function bankData(){
   event.preventDefault()
  
   let netobj = {
      data: document.getElementById('net-input').value
   }
   lsData.push(netobj)
   localStorage.setItem('userdata', JSON.stringify(lsData))
}
document.getElementById('net-btn').innerText = 'PAY NOW ₹';

// COD DATA //
// document.getElementById('').addEventListener('click', function() {

// })
document.getElementById('cod-btn').innerText = 'PAY NOW ₹';
