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
  let cart = [item1, item2, item3, item4, item5,item6,item7,item8, item9, item10, item11, item12]
  
  
  localStorage.setItem('Cart', JSON.stringify(cart))
   

let tbody = document.querySelector('#tbody');
function admin() {
  cart.forEach(item=>{
  tbody.innerHTML += `
  <tr scope="row">
    <td>${item.name}</td>
      <td>${item.category}</td>
      <td><img src='${item.image}' width="50" height="50"></td>
      <td>${item.description}</td>
      <td>R${item.price}</td>
      <td>
      <div class="btn-group" role="group">
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit">Edit</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </div>
      </td>
  </tr>`
  })
  
}

admin()


let modal = document.getElementById('edit');
let form = document.getElementById('editItems');

tbody.addEventListener('click', function(event) {
  let rowIndex = event.target.closest('tr').rowIndex;
  let item = cart[rowIndex - 1];
  
  if (item) {
    
    if (event.target.classList.contains('btn-warning')) {

      form.itemName.value = item.name;
      form.descriptionItem.value = item.description;
      form.priceItem.value = item.price;
      modal.style.display = 'block';
    } else if (event.target.classList.contains('btn-danger')) {
     
      cart.splice(rowIndex - 1, 1);

      admin()

      window.alert('Item deleted');
    }
    localStorage.setItem('Cart', JSON.stringify(cart));
  }
 
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let itemName = form.itemName.value;
  let descriptionItem = form.descriptionItem.value;
  let priceItem = form.priceItem.value;

  item.itemName = itemName;
  item.descriptionItem = descriptionItem;
  item.priceItem = priceItem;
  localStorage.setItem('Cart', JSON.stringify(cart));

  admin()

window.alert('Item edited');
});



