let productBtn = document.getElementById("productBtn");
const url = "https://test-api2-73ku.onrender.com"
let mainsection = document.getElementById("mainSection");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let cardContainer = document.getElementById("cardContainer");
let product = [];
productBtn.addEventListener("click",(e)=>{
    
    card1.innerHTML = null;
    card3.innerHTML = null;
    card1.style.border = "none"
    card3.style.border = "none"
    // let select = document.createElement("select");
    // let defopt = document.createElement("option")
    // defopt.innerText = "Choose Product";
    // let opt1 = document.createElement("option");
    // opt1.setAttribute("value","boys");
    // opt1.innerText = "Boys"
    // let opt2 = document.createElement("option");
    // opt2.setAttribute("value","girls");
    // opt2.innerText = "Girls"
    // let opt3 = document.createElement("option");
    // opt3.setAttribute("value","footwear");
    // opt3.innerText = "Footwear"
    // select.append(defopt,opt1,opt2,opt3,opt4)
    // mainsection.append(select);
    let card = `
    <select id="select">
        <option value="">Choose Product</option>
        <option value="boys">Boys</option>
        <option value="girls">Girls</option>
        <option value="footwear">Footwear</option>
        <option value="toddler">Boys Toddler</option>
        <option value="babygear">BabyGear</option>
    </select>
    `
    mainsection.innerHTML = card;


    let select = document.getElementById("select");

    select.addEventListener("change",(e)=>{
        let val = e.target.value;
        // console.log(val)
        if(val=="boys"){
            fetch("https://test-api2-73ku.onrender.com/data")
            .then(res=> res.json())
            .then((data)=>{
                showDom(data);
            })
        }else if(val=="girls"){
            fetch("https://test-api2-73ku.onrender.com/girl")
            .then(res=> res.json())
            .then((data)=>{
                showDom(data);
            })
        }else if(val=="footwear"){
            fetch("https://test-api2-73ku.onrender.com/Footwear")
            .then(res=> res.json())
            .then((data)=>{
                console.log(data)
                let actualdata = []
                data.forEach(el => {
                    // console.log(el["d-price"])
                    let obj = {}
                    obj.title = el.title.substring(0,10)
                    obj.image = el.image
                    obj.price = el["d-price"]
                    actualdata.push(obj)
                });
                showDom(actualdata);
            })
        }else if (val=="toddler"){
            fetch("https://test-api2-73ku.onrender.com/toddler")
            .then(res=> res.json())
            .then((data)=>{
                showDom(data);
            })
        }else if(val=="babygear"){
            fetch("https://test-api2-73ku.onrender.com/babygear")
            .then(res=> res.json())
            .then((data)=>{
                console.log(data)
                let actualdata = []
                data.forEach(el => {
                    // console.log(el["d-price"])
                    let obj = {}
                    obj.title = el.title.substring(0,14)
                    obj.image = el.image
                    obj.price = el["d-price"]
                    actualdata.push(obj)
                });
                showDom(actualdata);
            })
        }
    })
    function showDom(data){
        let cardlist = `
            
            <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
            </table>
                ${data.map(item=> getCard(item.title,item.image,item.price)).join("")}
            
        `
        mainsection.innerHTML = cardlist;
    }
    
    function getCard(name,image,price){
            let card = `
            <table>
                    <tbody>
                        <tr>
                            <td>${name}</td>
                            <td>RS.${price}</td>
                            <td><img src="${image}" alt="Product" id = "rowimg"></td>
                            <td id = edit>Edit</td>
                            <td id = delete>Delete</td>
                        </tr> 
                    </tbody>
            <table>        
                
        `
            return card;
    }
})

// function showDom(data){
//     let cardlist = `
//         <div>
//         <table>
//         <thead>
//             <tr>
//                 <th>Product Name</th>
//                 <th>Price</th>
//                 <th>Image</th>
//                 <th>Edit</th>
//                 <th>Delete</th>
//             </tr>
//             </thead>
//         </table>
//             ${data.map(item=> getCard(item.title,item.image,item.price)).join("")}
//         </div>
//     `
//     mainsection.innerHTML = cardlist;
// }

// function getCard(name,image,price){
//         let card = `
//         <table>
//                 <tbody>
//                     <tr>
//                         <td>${name}</td>
//                         <td>${price}</td>
//                         <td>${image}</td>
//                         <td>Edit</td>
//                         <td>Delete</td>
//                     </tr> 
//                 </tbody>
//         <table>        
            
//     `
//         return card;
// }