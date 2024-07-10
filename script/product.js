function CreateItem(id, name, category, image, description, price, quantity) {
  this.id = id
  this.name = name
  this.category = category
  this.image = image
  this.description = description
  this.price = price
  this.quantity = quantity
}

let item1 = new CreateItem(1, "Mocha", "Dresses", "https://siphokuhlenyana.github.io/eComPics/Mocha.png", "This dresses can be easily worn to any event ,Da Gama Textiles Fabric ,3 Cats Original ShweShwe and a pleated bottomline.Cold water wash and do not bleach !.", 1400.00, 1)

let item2 = new CreateItem(2, "LillyFlow", "Dresses", "https://siphokuhlenyana.github.io/eComPics/LillyFlow.png", "LillyFlow is a very fashionable dress that you can wear with any kind of shoe be it with heels , sneakers or a flat shoe it easily adapts to the mood you are in . You can wear it going out daytime and night time too.", 2000, 1)

let item3 = new CreateItem(3, "TableMat", "Kitchenware", "https://siphokuhlenyana.github.io/eComPics/TableMat.jpeg", "Essence of African touch that can be easily washed and setup the way you want.", 450., 1)

let item4 = new CreateItem(4, "Overflow", "Dresses", "https://siphokuhlenyana.github.io/eComPics/Overflow.JPG", "Mmmh this dress is giving elegant look and a bold outlook , it can be both hand washed and washed using a washing machine .", 3400.90, 1)

let item5 = new CreateItem(5, "RelyOn", "T-shirts", "https://siphokuhlenyana.github.io/eComPics/Tshirt.jpeg", "Affordable T-shirt that can be worn with skirts or even trousers and it is 100% cotton.", 250.49, 1)

let item6 = new CreateItem(6, "Blue", "Dresses", "https://siphokuhlenyana.github.io/ImagesPortfolio/blue.jpg", "Durable fabric qualify that can be easily worn with sandals , high heels and and any other flat shoe. This dress is a go- get me for traditional events such as lobola gatherings and etc.", 2000, 1)

let item7 = new CreateItem(7, "Benny", "Knitware", "https://siphokuhlenyana.github.io/ImagesPortfolio/benny.jpg", "Easily worn and  a necessity for winter season  it is 100% cotton.", 150, 1)

let item8 = new CreateItem(8, "Stylish", "T-shirts", "https://siphokuhlenyana.github.io/ImagesPortfolio/stylish.jpg", "Dagama tops that are fashionable and can be worn with anything. ", 500.90, 1)
let item9= new CreateItem(9,"Yellow","Kitchenware","https://siphokuhlenyana.github.io/ImagesPortfolio/yellow.jpg","This a placemat for your get together meetings ,their fabric is made up of the dagama fabric.",1800,1)
let item10=new CreateItem(10,"Scarf","Knitware","https://siphokuhlenyana.github.io/ImagesPortfolio/scarf.jpg","A blend of Indigo and aqua shade makes this scarf to pop up !! Do not tumble dry this product.",250,1)
let item11=new CreateItem(11,"Winter Combo","Knitware","https://siphokuhlenyana.github.io/ImagesPortfolio/giftcombo.jpg","You get a scarf , gloves and an utensil holder that accomodates 3-5 stationary products .",1000,1)
let item12=new CreateItem(12,"Makoti Re-imagined","Dresses","https://siphokuhlenyana.github.io/ImagesPortfolio/makoti.jpg","There is no exciting way to start your newly wedded journey without having our Makoti range edition .",1500,1)
let cart = [item1, item2, item3, item4, item5,item6,item7,item8,item9,item10,item11,item12]


localStorage.setItem('Cart', JSON.stringify(cart))


let heading = document.querySelector('#heading')
heading.textContent = "Catelogue"


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

let div = document.querySelector("#prod")

function displayFiltered(c) {

  div.innerHTML = ''
  c.forEach(item => {
    div.innerHTML += `
    <div class="card justify-content-center" id="card" style="width: 20rem;height: 35rem;">
    <img id="images" src='${item.image}' style="width:20rem;height:10rem;">
    <div class="card-body">
    <p id="prodName">${item.name}</p>
    <p id="price">R${item.price}</p>
    <p id="description">${item.description}</p>
    
     <button id="view"type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></button>
     <button class="buy" value="${item.price}">Buy</button>

     <div id ="stars"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
</svg></div>
    </div>
  </div>

  <div id="buttons>
      
      </div>

  `
  })
}
displayFiltered(cart)




// Targeting the list items under the filter btn
let filterByKitchen = document.querySelector("#kitchen")
let filterByDress = document.querySelector('#dresses')

// When I click on it
filterByDress.addEventListener('click', (event) => {
  let d = event.target.getAttribute('value')
  writeData(d)
})
filterByKitchen.addEventListener('click', (event) => {
  let k = event.target.getAttribute('value')
  writeData(k)
})

// Displays the filtered data
function writeData(i) {
  let filtered = cart.filter(item => item.category == i)
  displayFiltered(filtered)
}
//  resets the page 
let resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', () => {
  displayFiltered(cart)

})



// Add to favourites 
//   let favourite=document.querySelectorAll('#view')
//     favourite.addEventListener('click',()=>{
//         alert(
//     "You have added this item to your favourites !"

//   )
// })

// Sorting my cart ..

let sortLow = document.querySelector('#low')
let sortHigh = document.querySelector('#high')


//When I click on it 
sortLow.addEventListener('click', (event) => {
  let so = event.target.value

  displaySorted(so)
})

sortHigh.addEventListener('click', (event) => {
  let me = event.target.value
  displaySorted(me)
})

function displaySorted() {
  let sorted = cart.sort(this.price)
  displayFiltered(sorted)

}

function priceSort(o) {
  let anotherSet = cart.sort(this.price)
  displayFiltered(anotherSet)
}

// Created an empty array for my cart-checkout , buy button to be targeted
let buy = document.querySelectorAll('.buy')
let boughtProd = []

buy.forEach(button => {
  button.addEventListener('click', () => {
    let bought = cart.find(item => item.price == button.value)
    let boughtStill = boughtProd.find(item => item.id == bought.id)

    if (boughtStill) {
      boughtStill.quantity++
      boughtStill = boughtStill.price * boughtStill.quantity
    } else {
      bought.quantity = 1
      boughtProd.push(bought)
    }
    localStorage.setItem('boughtProduct', JSON.stringify(boughtProd))
  })

})

//     




// })






//  cart.sort(function(m,n){
//   if(m.price < n.price){
//      return -1
//   }
//   return 0
//  })

//   cart.sort(function(m,n){
//   if(m.price < n.price){
//      return -1;
//   } if(m.price >n.price){
//     return 1;
//   }
//   return 0;
//  })