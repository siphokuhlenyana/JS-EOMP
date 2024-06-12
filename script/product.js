function CreateItem(id,name,category,image,description,price){
    this.id=id 
    this.name=name 
    this.category=category 
    this.image=image 
    this.description =description 
    this.price=price 
}

let item1 = new CreateItem(1 ,"Mocha","Dresses","https://siphokuhlenyana.github.io/eComPics/Mocha.png","This dresses can be easily worn to any event ,Da Gama Textiles Fabric ,3 Cats Original ShweShwe and a pleated bottomline.Cold water wash and do not bleach !.", 1400.00)

let item2=new CreateItem(2,"LillyFlow","Dresses","https://siphokuhlenyana.github.io/eComPics/LillyFlow.png","", 2000)

let item3=new CreateItem(3,"TableMat","Kitchenware","https://siphokuhlenyana.github.io/eComPics/TableMat.jpeg","", 450.)

let item4=new  CreateItem(4,"Overflow","Dresses","https://siphokuhlenyana.github.io/eComPics/Overflow.JPG","", 3400.90)

let item5=new CreateItem(5,"RelyOn","T-shirts","https://siphokuhlenyana.github.io/eComPics/Tshirt.jpeg","", 250.49)

let cart=[item1,item2,item3,item4,item5]

localStorage.setItem('Cart',JSON.stringify(cart))


let heading=document.querySelector('#heading')
heading.textContent= "Products"


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

cart.forEach(item =>{
    let div=document.querySelector("#prod")
    div.innerHTML += `
    <div class="card" id="card" style="width: 18rem;height: 18rem;">
    <img id="images" src='${item.image}'>
    <div class="card-body">
    <p id="prodName">${item.name}</p>
     <button id="view"type="button" class="btn btn-secondary"
        data-bs-toggle="popover" data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables.">View</button>
     <button class="buy" value="${item.id}">Buy</button>
    </div>
  </div>

  <div id="buttons>
      
      </div>

  `
  })

//  

let view=document.querySelectorAll('#view')
// view.addEventListener('click',(event))

let input=document.querySelector('input')
let button=document.querySelector("#sort")
let btn=document.querySelector("#search")



// function searchItems(){
// let inputedItems=input.value


// }

// btn.addEventListener('click',()=>{
//     let searchProd=input.value
//     let inputedItems=cart.filter(cart=>{
//         if(searchProd.innerText == true){
//               cart.id. toString().includes(searchProd)||
//         cart.name.includes(searchProd)||
//         cart.category.includes(searchProd)||
//         cart.price.toString().includes(searchProd)
//         }else{
//             alert (" Please insert the correct item you are looking for .You can search by its name / category /ID / its price ! .")
//         }
      
//     })
let cat=cart.includes(input.textContent)

btn.addEventListener('click',()=>searchProd())
    function searchProd(cart){
  
        if(input.textContent == +true){
         for(cat of cart){
           cart.map().filter(cat=> input.textContent== +cat)
          return(cat)
         }
        } else{
          alert ('Please insert the correct item you are looking for .You can search by its name / category /ID / its price ! .')
        }
        
      }
      searchProd()






    // let tbody=document.querySelector('tbody')
    // tbody.innerHTML =''
    // inputedItems.map(cart=>{
    //     tbody.innerHTML += `
    //     <tr>
    //     <td>${cart.id}</td?
    //     <td>${cart.name}</td>
    //     <td>$${cart.category}</td>
    //     <td><img src='${cart.image}'></td>
    //     <td>${cart.description}</td>
    //     <td>${cart.price}</td>

    //     </tr>
        
    //     `
    // })
