{
    var currentCartItem = new Array(0);
    var currentCartPrice = new Array(0);
    var ourStorage = window.localStorage;
    
}
function updateCartItemBlueCheeseBurger() {
    var image = document.getElementById('Blue Cheese Burger');
    var mine = document.getElementsByName(image);
    ourStorage.setItem("team",mine); 
        console.log(ourStorage.getItem("team"));
    if(ourStorage.length == 0 ){
        
    }

//    for(let i = 0; i < ourStorage.length; i++){
//     console.log(ourStorage.getItem(i));
//     console.log(ourStorage.getItem.length);
// }
return image;
}
function updateCartItemDoubleHamburger() {
    var image = document.getElementById('Double Hamburger');
    document.getElementsByName
   currentCartItem.push(image);
   for(let i = 0; i < currentCartItem.length; i++){
    console.log(currentCartItem[i]);
    console.log(currentCartItem.length);
}
}
function updateCartBlueCheeseBurgerPrice() {
var image = document.getElementById('Blue Cheese Burger Price');
    document.getElementsByName(image);
    if(ourStorage.length == 0 ){
        ourStorage.setItem(0,image); 
    }

   for(let i = 0; i < ourStorage.length; i++){
    console.log(ourStorage.getItem(i));
    console.log(ourStorage.getItem.length);
}
return image;
}
function updateCartPrice() {
    var image = document.getElementById('ExpensivePrice');
    document.getElementsByName
   currentCartPrice.push(image);
   for(let i = 0; i < currentCartPrice.length; i++){
    console.log(currentCartPrice[i]);
    console.log(currentCartPrice.length);
    
}
return image;
}
function updateCartItemDessert() {
    var image = met.getElementById('nameDessert');
    document.getElementsByName
    sessionStorage.setItem(1,image);
   currentCartItem.push(image);
   for(let i = 0; i < currentCartItem.length; i++){
    console.log(currentCartItem[i]);
    console.log(currentCartItem.length);
}
}
function updateCartPriceDessert() {
    var image = document.getElementById('priceDessert');
    document.getElementsByName
   currentCartPrice.push(image);
   for(let i = 0; i < currentCartPrice.length; i++){
    console.log(currentCartPrice[i]);
    console.log(currentCartPrice.length);
    
}
return image;
}
function Storage(){

    for(let i = 0; i < ourStorage.length; i++){
    console.log(ourStorage.getItem(i));
   
}
}

