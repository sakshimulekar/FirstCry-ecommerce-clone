let mydata = [
  {
    "id": 1,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12612293a.webp",
    "title": "shoes",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 250
  },

  {
    "id": 2,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11909989a.webp",
    "title": "sweator",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 631
  },

  {
    "id": 3,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/300x364/9293740a.webp", 
    "title": "dress",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 694
  },

  {
    "id": 4,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/219x265/3218784a.webp", 
    "title": "dress",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 631
  },

  {
    "id": 5,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/219x265/11615387a.webp", 
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "title": "dress",
    "price": 672
  },

  {
    "id": 6,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/219x265/11725480a.webp", 
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "title": "shoes",
    "price": 321
  },

  {
    "id": 7,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/219x265/11734360a.webp", 
    "title": "dress",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 299
  },

  {
    "id": 8,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11744443a.webp", 
    "title": "shoes",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 220
  },

  {
    "id": 9,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/219x265/12301457a.webp", 
    "title": "dress",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 846
  },

  {
    "id": 10,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/219x265/12717234a.webp", 
    "title": "dress",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 923
  },

  {
    "id": 11,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/219x265/12324913a.webp", 
    "title": "dress",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "price": 522
  }
]
// fetch("/Database/toddler.json")
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     appendData(data)
//     console.log(data)
// })
// .catch((err)=>{
//     return err
// })

let appendData = (mydata) => {
  let container = document.getElementById("product-container");
  container.innerHTML = "";
  mydata.forEach((el) => {
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
appendData(mydata);

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
    let data1 = mydata.sort(function (a, b) {
      return a.price - b.price;

    })
    appendData(data1)

  } else if (val == "HTL") {
    let sorteddata = mydata.sort(function (a, b) {
      return b.price - a.price;

    })
    appendData(sorteddata)

  } else {
    appendData(mydata);
  }
})

filter.addEventListener("change", () => {
  let filtered = mydata.filter((element) => {
    if (element.title === filter.value) {
      return true;
    } else {
      return false;
    }
  })


  appendData(filtered)
})