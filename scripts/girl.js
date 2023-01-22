let displayname = document.getElementById("displayname");
   
  let username = JSON.parse(localStorage.getItem("username"));
  displayname.innerText = username;
  console.log(username);
  let displayname1 = document.getElementById("displayname1");
   
  
  displayname1.innerText = username;
  console.log(username);

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


let defaultArr = []
let myData = []

fetch("https://footwear-server.vercel.app/girls")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    appendData(data)
    myData=data
    defaultArr=data
    console.log(data)
  })

let appendData = (myData) => {

  let container = document.getElementById("product-container");
  container.innerHTML = "";
  myData.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("id", "card");

    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("h3");
    name.textContent = el.title;

    let des = document.createElement("p");
    des.textContent = el.description;

    let price = document.createElement("h5");
    price.textContent = "₹ " + el.price + ".00";

    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.setAttribute("id", "btn");
    btn.addEventListener("click", () => {
      Addtocart(el);
      console.log("button working perfectly")
    })

    card.append(img, name, des, price, btn)
    container.append(card)

  })
}
appendData(myData)


function Addtocart(el) {
  let arr = JSON.parse(localStorage.getItem('add-to-cart')) || [];
  if (arr === null) { arr = []; }

  let present = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].id === el.id) {
      present = true;
      break;
    }

  }
  if (present == true) {
    swal("Already in Cart", "Product Already Present in Cart!", "info");

  } else {
    arr.push(el)
    localStorage.setItem('add-to-cart', JSON.stringify(arr))
    swal("Success", "Your Product Added to Cart!", "success");


  }

}


let sorted = document.querySelector("#sort");
sorted.addEventListener("change", function (event) {
  let val = document.querySelector("#sort").value;
  console.log(val)
  if (val == "LTH") {
    let data1 = myData.sort(function (a, b) {
      return a.price - b.price;

    })
    appendData(data1)
  } else if (val == "HTL") {
    let sorteddata = myData.sort(function (a, b) {
      return b.price - a.price;

    })
    appendData(sorteddata)

  } else if (val == "default") {
    fetch("https://footwear-server.vercel.app/girls")
      .then(res => res.json())
      .then((data) => {

        appendData(data)

      })
  }
})



filter.addEventListener("change", (e) => {

  let val = e.target.value

  if(val=="sets & suits for girl"){
    let filtered = myData.filter(el=>{
      if(el.title==val){
        return true;
      }else{
        return false;
      }
    })
    appendData(filtered)
  }
  else if(val=="frock & Dresses"){
    let filtered = myData.filter(el=>{
      if(el.title==val){
        return true;
      }else{
        return false;
      }
    })
    appendData(filtered)
  }
  else if(val=="Girl Ethnic wear"){
    let filtered = myData.filter(el=>{
      if(el.title==val){
        return true;
      }else{
        return false;
      }
    })
    appendData(filtered)
  }
  else if(val=="all"){
    let filtered = myData.filter(el=>{
      if(el.title==val){
        return true;
      }else{
        return false;
      }
    })
    appendData(defaultArr)
  }

})