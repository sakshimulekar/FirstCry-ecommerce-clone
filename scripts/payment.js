
   // CREDIT/DEBIT CARD LIST SHOW
 document.getElementById('card-buttun').addEventListener('click', ()=>{

   const showcard = document.getElementById('credit-card')
   if(showcard.style.display === 'none') {
      showcard.style.display = 'block'
   } else {
      showcard.style.display = 'none'
   }
 })

 //UPI LIST SHOW
 document.getElementById('upi-head').addEventListener('click', ()=>{

   const showdiv = document.getElementById('upi')
   if(showdiv.style.display === 'none') {
      showdiv.style.display = 'block'
   } else {
      showdiv.style.display = 'none'
   }
 })

 //PAYTM LIST SHOW
 document.getElementById('paytm-data').addEventListener('click', ()=>{

   const shodata = document.getElementById('paytm')
   if(shodata.style.display === 'none') {
      shodata.style.display = 'block'
   } else {
      shodata.style.display = 'none'
   }
 })

 //NETBANKING LIST SHOW
 document.getElementById('net-data').addEventListener('click', ()=>{

   const shodata = document.getElementById('net-info')
   if(shodata.style.display === 'none') {
      shodata.style.display = 'block'
   } else {
      shodata.style.display = 'none'
   }
 })

 //COD LIST SHOW
 document.getElementById('cod-data').addEventListener('click', ()=>{

   const shodata = document.getElementById('cod-info')
   if(shodata.style.display === 'none') {
      shodata.style.display = 'block'
   } else {
      shodata.style.display = 'none'
   }
 })


 document.getElementById('card-btn').addEventListener('click', paymentData)
 const checkdata= document.getElementById('checkbox')
function paymentData(){
   event.preventDefault()

   var payobj = {
      cardName: document.getElementById('card-name').value,
      cardNum: document.getElementById('card-num').value,
      cardMonth: document.getElementById('month').value,
      cardYear: document.getElementById('year').value,
      cardCVV: document.getElementById('cvv').value
   }
   if(checkdata.checked){
      console.log(payobj);
   }else {
      alert('check your input')
   }
   
}

