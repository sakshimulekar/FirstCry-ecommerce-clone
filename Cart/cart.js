//console.log("hii");

let getData = JSON.parse(localStorage.getItem("add-to-cart"))||[];


let card = document.getElementById("product-container");

let total = document.getElementById("total")

let sum = document .getElementById("sum")


function fetchData(data){

    card.innerHTML = null;
    
    if(getData.length === 0){
    alert("Empty Cart")
}


    


    data.forEach((ele) => {

        let main= document.createElement("div");
        main.setAttribute("id", "main");


        let div = document.createElement("div");
        div.setAttribute("id", "card");

        let div1 = document.createElement("div");
        div1.setAttribute("class", "text");

        let title = document.createElement("h2");
        title.innerText = ele.title;

        let div2 = document.createElement("div");
        div2.setAttribute("id", "imgdiv");
        let img = document.createElement("img");
        img.src = ele.image;

        let description = document.createElement("p");
        description.innerText = ele.description;

        let prize = document.createElement("h3");
        prize.innerText = ele.price;
        total.innerText = +(total*ele.price);
        //sum.textContent=sum+ele.price;

        let down = document.createElement("div");
        down.setAttribute("id", "down");
        let removeBtn = document.createElement("button");
        removeBtn.innerText = `Remove `;
        removeBtn.setAttribute("id","btn")

        removeBtn.addEventListener("click",()=>{

            data.splice(ele,1);

            alert("product remove successfully")

            localStorage.setItem("add-to-cart",JSON.stringify(data));

            fetchData(data);
            console.log(data);
            
        })

        let box = document.createElement("div");
        box.innerHTML = ` <i class="fa-solid fa-trash"></i>`;

        let shortBtn = document.createElement("button");
        shortBtn.innerText = "❤️ Move to Shortlist";

        let select = document.createElement("select")
        select.innerText = "quantity"

        let opt = document.createElement("option");
        opt.innerText = "qty :";
        let opt1 = document.createElement("option");
        opt1.innerText = "1";
        let opt2 = document.createElement("option");
        opt2.innerText = "2";
        let opt3 = document.createElement("option");
        opt3.innerText = "3";
        let opt4 = document.createElement("option");
        opt4.innerText = "4";
        let opt5 = document.createElement("option");
        opt5.innerText = "5";
       
        localStorage.setItem("add-to-cart",JSON.stringify(data));

        div2.append(img)
        removeBtn.append(box);
        select.append(opt,opt1,opt2,opt3,opt4,opt5);
        div1.append(title,description,prize,select)
        div.append(div2,div1);
        down.append(removeBtn,shortBtn)
        main.append(div,down)
        card.append(main);
        //main.append(card)
    })
    
}
fetchData(getData);
