//console.log("hii");

let getData = JSON.parse(localStorage.getItem("add-to-cart"))||[];


let card = document.getElementById("cart_container");

function fetchData(data){

    card.innerHTML = null;

    data.forEach((ele,i) => {
        let div = document.createElement("div");
    
        let title = document.createElement("h2");
        title.innerText = ele.title;

        let img = document.createElement("img");
        img.src = ele.image;

        let description = document.createElement("p");
        description.innerText = ele.description;

        let prize = document.createElement("h3");
        prize.innerText = ele.price;

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "remove";

        removeBtn.addEventListener("click",()=>{

            data.splice(ele,1);

            localStorage.setItem("add-to-cart",JSON.stringify(data));

            fetchData(data);
        })

        let box = document.createElement("div");
        box.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        let shortBtn = document.createElement("button");
        shortBtn.innerText = "❤️ Move to Shortlist";
    
        localStorage.setItem("add-to-cart",JSON.stringify(data));

        removeBtn.append(box);

        div.append(title,img,description,prize,removeBtn,shortBtn);

        card.append(div);

    })
    
}
fetchData(getData);