//console.log("hi")

let wishData = JSON.parse(localStorage.getItem("wishlist"))||[];

var card = document.getElementById("shortlist");

fetchData(wishData)

function fetchData(data){

    card.innerHTML = null;
    
    if(wishData.length === 0){
    alert("Empty Wishlist")
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
       
       

       
        let shortBtn = document.createElement("button");
        shortBtn.innerText = "Move to Cart";

        shortBtn.addEventListener("click",()=>{

            data.splice(ele,1);

            localStorage.setItem("add-to-cart",JSON.stringify(data));

            fetchData(data);

            //console.log(data);
        })

        

       
       
       
       
        localStorage.setItem("wishlist",JSON.stringify(data));

        div2.append(img)
       
        div1.append(title,description,prize,shortBtn)
        div.append(div2,div1);
       
        main.append(div)
        card.append(main);
        
    })
    
    //heading.innerText = total

    
}
