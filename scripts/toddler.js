console.log("child script working")
var data;

fetch("/Database/toddler.json")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    appendData(data)
    console.log(data)
})
.catch((err)=>{
    return err
})

let appendData = (data) => {
    let container = document.getElementById("product-container");
    container.innerHTML = "";
    data.forEach((el) => {
        let card = document.createElement("div");
        card.setAttribute("id", "card");

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("h3");
        name.textContent = el.title;

        let des = document.createElement("p");
        des.textContent = el.description;

        let price = document.createElement("p");
        price.textContent = "₹ "+el.price+".00";

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

function Addtocart(ele) {
    let arr = JSON.parse(localStorage.getItem('add-to-cart')) || [];
    arr.push(ele)
    localStorage.setItem('add-to-cart', JSON.stringify(arr))

}
