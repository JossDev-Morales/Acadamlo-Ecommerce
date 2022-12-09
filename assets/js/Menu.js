import {getlikes,getUsers,getOrder,pushlike,pushorder,removelike,removeorder} from "../js/users.js";
import { carritoconstructor,ordercontainer } from "../js/Order.js";
let Menu={
    "Pizzas": [
        {Product:"Bacon-Crunch", img:"assets/images/pizza/Pizza-tocino.png", inf:"Pizza con tocino, Carne, queso mozzarella y mas tocino", price:12},
        {Product:"Meat Paradise", img:"assets/images/pizza/Pizza-carne.png", inf:"Pizza de carne, con bolognesa y salsa especial", price:12},
        {Product:"Queen Cheese", img:"assets/images/pizza/Pizza-doubleCheese.png", inf:"Queso Mozzarella, Parmesano y Roquefort, todos en un mismo pedazo de cielo", price:12},
        {Product:"Hawaiian delight", img:"assets/images/pizza/Pizza-hawaiana.png", inf:"Una rica y clasica pizza hawaiana, dulce y sabrosa", price:10.99},
        {Product:"Spicy Diablo", img:"assets/images/pizza/Pizza-mexicana.png", inf:"Picante pero sabrosa, clasica pizza con el sabor mexicano", price:10.99},
        {Product:"Veggie Taste", img:"assets/images/pizza/Pizza-veggie.png", inf:"Sabrosos vegetales con el poder del queso, saludable y sabrosa", price:10},
        {Product:"Big-Mix", img:"assets/images/pizza/Pizza-Big-mix.jpg", inf:"Rica pizza, 16 pedazos, armala a tu gusto", price:15},
        {Product:"Saquere Classic", img:"assets/images/pizza/pizza-square.png", inf:"La clasica pizza cuadrada, rica y sin complicaciones ", price:12}
    ],
    "Complementos": [
        {Pruduct:"Bastones Costra Cheddar",img:"assets/images/Complementos/Palitos-cheddar.png",inf:"Bastones de pan con orilla costra cheddar acompañados con salsa bolognesa",price:3.50},
        {Pruduct:"Pops De Queso",img:"assets/images/Complementos/Pops-queso.png",inf:"Bocados rellenos de queso mozarella acompañados con salsa bolognesa.",price:3.50},
        {Pruduct:"Papas Gajo Parmesano",img:"assets/images/Complementos/PapasGajoParmesano.png",inf:"papas rebanadas en gajo bañadas en polvo de Ajo Parmesano",price:4},
        {Pruduct:"Bastones Bolognesa",img:"assets/images/Complementos/Palitos-bolognesa.png",inf:"Bastones de pan acompañados con salsa bolognesa",price:3.50},
        {Pruduct:"Double Cheese&Bolognesa",img:"assets/images/Complementos/Bastones-doubleCheese&bolognesa.png",inf:"Bastones de pan con mozzarella y queso crema acompañados con salsa bolognesa",price:3.50},
        {Pruduct:"Quepapas",img:"assets/images/Complementos/quepapas.png",inf:"Deliciosas bolitas de papa rellenas con queso y jalapeño",price:4}
    ],
    "Bebidas": [
        {Product:"Coca-Cola",img:"assets/images/Bebidas/Coca-cola.jpg",inf:"Soda",price:1.50},
        {Product:"Fanta",img:"assets/images/Bebidas/Fanta.jpg",inf:"Soda",price:1.50},
        {Product:"Fresca",img:"assets/images/Bebidas/Fresca.jpg",inf:"Soda",price:1.50},
        {Product:"Sprite",img:"assets/images/Bebidas/Sprite.jpg",inf:"Soda",price:1.50},
        {Product:"Sidral Mundet",img:"assets/images/Bebidas/Sidral-Mundet.jpg",inf:"Soda",price:1.50},
        {Product:"Fuze-tea",img:"assets/images/Bebidas/Fuze-tea.jpg",inf:"Te",price:1.50},
        {Product:"Ciel",img:"assets/images/Bebidas/Ciel.jpg",inf:"Agua",price:1}
    ],
    "Postres": [
        {Product:"Rebanada CarlosV",img:"assets/images/Postres/Bastones-carlosV.png",inf:"Pan con relleno de chocolate CarlosV",price:3.50},
        {Product:"Rebanada La lechera",img:"assets/images/Postres/Bastones-lechera.png",inf:"Pan con relleno de La lechera",price:3.50},
        {Product:"Rebanada Nutella",img:"assets/images/Postres/Bastones-chocoAvellana.png",inf:"Pan con relleno de Nutella avellana",price:3.50},
        {Product:"Rebanada Coronado",img:"assets/images/Postres/Bastones-cajeta.png",inf:"",price:3.50}
    ],
    "Dips": [
        {Product:"Dip Bolognesa",img:"assets/images/dips/Dip-Bolognesa.jpg",inf:"Dip de salsa bolognesa",price:1.50},
        {Product:"Dip Bufalo",img:"assets/images/dips/Dip-Bufalo.jpg",inf:"Dip de salsa bufalo",price:1.50},
        {Product:"Dip Ranch",img:"assets/images/dips/Dip-Ranch.jpg",inf:"Dip de salsa ranch",price:1.50}
    ]
  }

function getAllProducts() {
    let arr=[]
    let Products=[]
    arr.push(Menu.Bebidas)
    arr.push(Menu.Complementos)
    arr.push(Menu.Postres)
    arr.push(Menu.Pizzas)
    arr.push(Menu.Dips)
    arr.forEach(e =>{
        e.forEach(elem =>{
            Products.push(elem)
        })
    })
    return Products
}

function getAllPizzas() {
    let pizzas=[]
    Menu.Pizzas.forEach(e =>{
        pizzas.push(e)
    })
    return pizzas
}
function liked(element) {
    getlikes().forEach(e=>{
        if (element==e) {
            return "liked"
        }else{
            return "default"
        }
    })
}
//toggle menusections
let change1=document.querySelector("#change1")
let change2=document.querySelector("#change2")
let change3=document.querySelector("#change3")
let change4=document.querySelector("#change4")
let change5=document.querySelector("#change5")

let allsecs= document.querySelector(".menusecs")

let menu_sec1=document.querySelector(".menu_sec1")
let menu_sec2=document.querySelector(".menu_sec2")
let menu_sec3=document.querySelector(".menu_sec3")
let menu_sec4=document.querySelector(".menu_sec4")
let menu_sec5=document.querySelector(".menu_sec5")

change1.addEventListener("click",()=>{
    menu_sec1.classList.add("display")
    menu_sec2.classList.remove("display")
    menu_sec3.classList.remove("display")
    menu_sec4.classList.remove("display")
    menu_sec5.classList.remove("display")
})
change2.addEventListener("click",()=>{
    menu_sec1.classList.remove("display")
    menu_sec2.classList.add("display")
    menu_sec3.classList.remove("display")
    menu_sec4.classList.remove("display")
    menu_sec5.classList.remove("display")
})
change3.addEventListener("click",()=>{
    menu_sec1.classList.remove("display")
    menu_sec2.classList.remove("display")
    menu_sec3.classList.add("display")
    menu_sec4.classList.remove("display")
    menu_sec5.classList.remove("display")
})
change4.addEventListener("click",()=>{
    menu_sec1.classList.remove("display")
    menu_sec2.classList.remove("display")
    menu_sec3.classList.remove("display")
    menu_sec4.classList.add("display")
    menu_sec5.classList.remove("display")
})
change5.addEventListener("click",()=>{
    menu_sec1.classList.remove("display")
    menu_sec2.classList.remove("display")
    menu_sec3.classList.remove("display")
    menu_sec4.classList.remove("display")
    menu_sec5.classList.add("display")
})
//toggle mainsections
let btnmenu=document.querySelector("#btnmenu")
let btnhome=document.querySelector("#btnhome")
let homecont=document.querySelector("#conthome")
let menucont=document.querySelector("#contmenu")
btnmenu.addEventListener("click",()=>{
    menucont.classList.toggle("display-inlineflex")
    homecont.classList.toggle("display-none")
})
btnhome.addEventListener("click",()=>{
    menucont.classList.toggle("display-inlineflex")
    homecont.classList.toggle("display-none")
})
function productconstructor (array) {
    let liked="default"
    if (localStorage.getItem("currentAK")!="0") {
        getlikes().forEach(element => {
            if (element.Product==array.Product) {
                liked="liked"
            }
        });
    }

    const bmcontainer=document.createElement("div")
    bmcontainer.classList.add("box-menu-product","Product")
    const bmimg=document.createElement("img")
    bmimg.src= array.img
    const bmh2=document.createElement("h2")
    bmh2.textContent=array.Product
    const bmp=document.createElement("p")
    bmp.textContent=array.inf
    const bmspan=document.createElement("span")
    bmspan.textContent=array.price
    const btnlike=document.createElement("div")
    btnlike.classList.add("btn","btn__menu_like",`${liked}`)
    const ilike=document.createElement("div")
    ilike.classList.add("fa-solid","fa-heart")
    btnlike.insertAdjacentElement("beforeend",ilike)
    const btnshop=document.createElement("div")
    btnshop.classList.add("btn","btn__menu_order")
    const ishop=document.createElement("i")
    ishop.classList.add("fa-brands","fa-shopify")
    btnshop.insertAdjacentElement("beforeend",ishop)
        //events
        btnlike.addEventListener("click",()=>{
            if (btnlike.classList.contains("liked")==false) {
                btnlike.classList.add("liked")
                pushlike(array)
            }else{
                btnlike.classList.remove("liked")
                removelike(array)
            }
        })
        btnshop.addEventListener("click",()=>{
            if (btnshop.classList.contains("onorder")==false) {
                btnshop.classList.add("onorder")
                pushorder(array,ordercontainer)
            }else{
                btnshop.classList.remove("onorder")
                removeorder(array)
            }
        })
        //construccion
    bmcontainer.insertAdjacentElement("beforeend", bmimg)
    bmcontainer.insertAdjacentElement("beforeend", bmh2)
    bmcontainer.insertAdjacentElement("beforeend", bmp)
    bmcontainer.insertAdjacentElement("beforeend", bmspan)
    bmcontainer.insertAdjacentElement("beforeend", btnlike)
    bmcontainer.insertAdjacentElement("beforeend", btnshop)
    return bmcontainer
}
document.addEventListener("DOMContentLoaded",()=>{
    Menu.Pizzas.forEach(e=>{
        menu_sec1.insertAdjacentElement("beforeend",productconstructor(e))
    })
    Menu.Complementos.forEach(e=>{
        menu_sec2.insertAdjacentElement("beforeend",productconstructor(e))
    })
    Menu.Postres.forEach(e=>{
        menu_sec3.insertAdjacentElement("beforeend",productconstructor(e))
    })
    Menu.Dips.forEach(e=>{
        menu_sec4.insertAdjacentElement("beforeend",productconstructor(e))
    })
    Menu.Bebidas.forEach(e=>{
        menu_sec5.insertAdjacentElement("beforeend",productconstructor(e))
    })
})
export {getAllProducts,getAllPizzas,Menu,getlikes}

