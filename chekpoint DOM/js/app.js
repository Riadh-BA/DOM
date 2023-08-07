
var btnPlusAll = Array.from(document.querySelectorAll(".qty-plus"))
var btnMinusAll = Array.from(document.querySelectorAll(".qty-minus"))
let addButton = document.querySelector('#add_button')
var btnFav = Array.from(document.querySelectorAll(".fa-thumbs-up"))
var btndelete = Array.from(document.querySelectorAll(".fa-trash"))
var cards = Array.from(document.querySelectorAll(".trcard"))



for(let h of btnPlusAll){
    h.addEventListener("click", function(){
    h.previousElementSibling.innerHTML++
    total()
    })
    
}



for(let q of btnMinusAll){
    q.addEventListener("click", function(){
        if(q.nextElementSibling.innerHTML > 0) {
    q.nextElementSibling.innerHTML--
    total()
        }
    })
    
}


function total(){
    let price = Array.from(document.querySelectorAll(".price"))
    let qqty = Array.from(document.querySelectorAll(".qty"))
    let st=0
    for(let oo in qqty){ 
        
        st+=qqty[oo].innerHTML*price[oo].innerHTML
        }
    
    document.querySelector(".subtotal").innerHTML=st
console.log(st)
}




for (let fav of btnFav){
    fav.addEventListener("click",function() {
    if (fav.style.color!="blue"){
        fav.style.color="blue"
    }else{
        fav.style.color="rgb(90, 89, 87)"
    }
    })
}

for (let i in btndelete){
    btndelete[i].addEventListener("click", function(){
        cards[i].remove()
        total()
    })
}

/* 
btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
function increaseQuantity(){
    this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1 
    subTotalUp(this)
    total()

}
 */

/*
btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});
function decreaseQuantity(){
    if( this.nextElementSibling.value > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1
        subTotalDown(this)
        total()
    }   
}
*/

/*
function subTotalUp(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
    let qty = parseInt(elt.previousElementSibling.value)
    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = parseInt(qty) * price
    
}
*/

/*
function subTotalDown(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
    let qty = parseInt(elt.nextElementSibling.value)
    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = parseInt(qty) * price
    
}
*/



addButton.addEventListener('click', addArticle);
function addArticle(){

    let name = document.querySelector('#name_product');
    let price = document.querySelector('#price_product');
    document.querySelector('#all_products').innerHTML =  document.querySelector('#all_products').innerHTML +  '<tr class="trcard"><td class="article--name"><div class="card1" style="width: 18rem;" ><div class="card-body"><h5 class="card-title">'+ name.value +'</h5><p class="card-text"><h4><div class="iconfelxx"><i class="fa-solid fa-thumbs-up"></i></div><div class="iconfelxx"><i class="fa-solid fa-trash"></i></div></h4></p></div></div></td><td class="quantity"><button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="Unit price"  class="qty" value="0" ><button class="qty-plus" id="1">+</button></td><td class="price">' + price.value + ' Euro</td> <td class="subtotal">0 Euro</td><td class="prixtotal"></td></tr>'
    

}



