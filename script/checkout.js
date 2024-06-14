//  Got array created when buy btn got clicked
let buya=JSON.parse(localStorage.getItem('boughtProduct'))


// Display in form of a table
function writeData(){
    let tbody=document.querySelector('#tbody')
    tbody.innerHTML =''
    buya.forEach(item=>{
        tbody.innerHTML += `
        
        
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td><img src='${item.image}' width ="150px" height ="100px"></td>
       
        <td>${item.price}</td>
        <td>${item.quantity}</td>

        
        
        `
    })
} writeData()


let icon1=document.querySelector('#cart')
icon1.innerHTML +=`
<div>
 <a href= "https://www.mastercardconnect.com/-/sign-in"><img id="mastercard" src="https://siphokuhlenyana.github.io/eComPics/58482354cef1014c0b5e49c0.png" width ="250px" height="160px" alt=""></a>
<a href="https://www.apple.com/apple-pay/"><img id="payapple" src="https://siphokuhlenyana.github.io/eComPics/8a9146626fb139b4d6bff3f091d47ca8.jpg" width ="250px" height="160px"  alt=""></a>

</div>


`
// Paying booth
let confirmation=document.querySelector('#confirm')
confirmation.innerHTML +=`
<div>
<span id ="tot">Total amount : R</span>
</div>
<div>
<button id="Pay" >Pay now </button>
<button id="clearCart" >Clear</button>
</div>

`


let pay=document.querySelector("#Pay")

pay.addEventListener('click',()=>{
    alert (" Payment Successful !")
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





