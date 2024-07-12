//  Got array created when buy btn got clicked
try{
    let buya=JSON.parse(localStorage.getItem('boughtProduct'))
    console.log('Data fetched !');




// Display in form of a table
function writeData(){
    
    let tbody=document.querySelector('#tbody')
    tbody.innerHTML ='Hi'
    buya.forEach(item=>{
        tbody.innerHTML += `
        
        
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td><img src='${item.image}' width ="150px" height ="100px"></td>
       
        <td id="price">${item.price}</td>
        <td id="quantity">${item.quantity}</td>

        
        
        `
        function displaysNothing(){
    if (tbody.innerHTML==""){
        tbody.innerHTML+='There is nothing on your cart , go shop !'
    }
 }
 displaysNothing()
    })
} writeData()
 

let icon1=document.querySelector('#cart')
let confirmation=document.querySelector('#confirm')

icon1.innerHTML +=`
<div>
 <a href= "https://www.mastercardconnect.com/-/sign-in"><img id="mastercard" src="https://siphokuhlenyana.github.io/eComPics/58482354cef1014c0b5e49c0.png" width ="250px" height="160px" alt=""></a>
<a href="https://www.apple.com/apple-pay/"><img id="payapple" src="https://siphokuhlenyana.github.io/eComPics/8a9146626fb139b4d6bff3f091d47ca8.jpg" width ="250px" height="160px"  alt=""></a>

</div>
<div>
<span id ="tot">Total amount : R</span>
</div>
<div>
<button id="Pay" >Pay now </button>
<button id="clearCart" >Clear</button>
</div>

`

// Paying booth

confirmation.innerHTML +=`
<div>
<span id ="tot">Total amount : R</span>
</div>
<div>
<button id="Pay" >Pay now </button>
<button id="clearCart" >Clear</button>
</div>

`
// let ans=document.querySelector('#tot')
// function grandTotal(){
//     let total = ${item.price} * ${item.quantity}
// }
// ans.textContent += (${item.price} * ${item.quantity})




let pay=document.querySelector("#Pay")

pay.addEventListener('click',()=>{
    if(tbody.innerHTML == ""){
    alert (" Payment cannot be done you have nothing on your cart !")
    }else if(tbody.innerHTML !==""){
        alert("Payment done , will reflect in the next 2hours !")
    }
})
 
// Clears the cart if you dont want it anymore 
let clear=document.querySelector("#clearCart")

clear.addEventListener('click',()=>{
    clearCart()
    alert ("Cart cleared ,shop more !")
    writeData()
})

function clearCart(){
    buya=[]
    console.log(buya);
}

let total=document.querySelector('#tot')
let price=document.querySelector('#price')
let quantity=document.querySelector('#quantity')
total.innerHTML +="0"

function calc(){
    if(tbody.innerHTML ==""){
        total.innerHTML +=0
    }else if(tbody.innerHTML !== ""){
       total.innerHTML+=parseInt(price*quantity)
    //    total.innerHTML +=parseIntl(`${item.price}*${item.quantity}`) 
    }
}
calc()


}catch{
    console.error('Not fetched data from the cart');
}



