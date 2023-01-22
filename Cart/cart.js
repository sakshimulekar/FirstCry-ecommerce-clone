//console.log("hii");

let getData = JSON.parse(localStorage.getItem("add-to-cart")) || [];

let wishData = JSON.parse(localStorage.getItem("wishlist")) || [];


for (let p of getData) {
    p.Q = 1
}
// console.log(getData)

var card = document.getElementById("product-container");
let heading = document.getElementById("heading")

let sum = document.getElementById("sum")

fetchData(wishData);


fetchData(getData);



function fetchData(data) {

    card.innerHTML = null;

    if (getData.length === 0) {
        alert("Empty Cart")
    }

    let total = 0;

    data.forEach((ele) => {


        let div = document.createElement("div");
        div.setAttribute("id", "card");

        let div1 = document.createElement("div");
        div1.setAttribute("class", "text");

        let title = document.createElement("h4");
        title.innerText = ele.title;

        let div2 = document.createElement("div");
        div2.setAttribute("id", "imgdiv");
        let img = document.createElement("img");
        img.src = ele.image;

        let description = document.createElement("p");
        description.innerText = ele.description;

        let prize = document.createElement("h3");
        prize.innerText = "Price : " + ele.price + ".00 ₹";

        let removeBtn = document.createElement("button");
        removeBtn.innerText = `Remove ~`;
        removeBtn.setAttribute("id", "btn")
        removeBtn.addEventListener("click", () => {

            data.splice(ele, 1);

            alert("product remove successfully")

            localStorage.setItem("add-to-cart", JSON.stringify(data));

            fetchData(data);
            console.log(data);

        })

        let box = document.createElement("div");
        box.innerHTML = ` <i class="fa-solid fa-trash"></i>`;

        let shortBtn = document.createElement("button");
        shortBtn.setAttribute("id", "btn1")
        shortBtn.innerText = "❤️ Move to Shortlist";

        shortBtn.addEventListener("click", () => {
            data.splice(ele, 1);

            localStorage.setItem("wishlist", JSON.stringify(data));

            fetchData(data);
            console.log(data);
        })

        //......quantity part......//
        let sel = document.createElement("div");
        sel.setAttribute("id", "sel");
        sel.innerText = "Quantity : "

        let select = document.createElement("select")
        select.innerHTML = "quantity"
        select.setAttribute("id","qty")

        let opt1 = document.createElement("option");
        opt1.innerText = 1;
        opt1.value = 1;

        let opt2 = document.createElement("option");
        opt2.innerText = 2;
        opt2.value = 2;

        let opt3 = document.createElement("option");
        opt3.innerText = 3;
        opt3.value = 3;

        let opt4 = document.createElement("option");
        opt4.innerText = 4;
        opt4.value = 4;

        let opt5 = document.createElement("option");
        opt5.innerText = 5;
        opt5.value = 5;

        select.addEventListener("change", (e) => {
            // let qty = document.getElementById("qty").value;
            let qty = e.target.value;
            console.log(qty)
            incre = +(e.target.value)
            select.innerText = incre
            ele.Q = incre
            localStorage.setItem("add-to-cart", JSON.stringify(data));
            fetchData(data);
        })

        //.....Size Selection...//
        let size = document.createElement("div");
        size.setAttribute("id", "size");
        size.innerText = "Size : "

        let siz = document.createElement("select")
        // siz.innerHTML = "size"

        let s1 = document.createElement("option");
        s1.innerText = "S";
        let s2 = document.createElement("option");
        s2.innerText = "M";
        let s3 = document.createElement("option");
        s3.innerText = "L";
        let s4 = document.createElement("option");
        s4.innerText = "XL";
        let s5 = document.createElement("option");
        s5.innerText = "XXL";

        localStorage.setItem("wishlist", JSON.stringify(data));

        localStorage.setItem("add-to-cart", JSON.stringify(data));

        div2.append(img)
        removeBtn.append(box);
        sel.append(select);
        select.append(opt1, opt2, opt3, opt4, opt5);
        size.append(siz)
        siz.append(s1, s2, s3, s4, s5)
        div1.append(title, description, prize, sel, size, removeBtn, shortBtn)
        div.append(div2, div1);
        card.append(div);

        total = total + ele.price * ele.Q

    })

    heading.innerText = total


}
