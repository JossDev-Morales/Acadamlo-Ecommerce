import { getAllProducts,Menu, getAllPizzas} from "../js/Menu.js";
import { carritoconstructor,ordercontainer } from "../js/Order.js";
import {getlikes,getUsers,getOrder,pushlike,removelike,pushorder,removeorder} from "../js/users.js";
let menuPizzas=[{link:"assets/images/pizza/Pizza-tocino.png", name:"Pizza De Queso", info:"Una rica pizza Para toda la familia como no.", price:15},
{link:"assets/images/pizza/Pizza-tocino.png", name:"Pizza De Peperoni", info:"Una rica pizza Para toda la familia como no.", price:20},
{link:"assets/images/pizza/Pizza-tocino.png", name:"Pizza De Champiñon", info:"Una rica pizza Para toda la familia como no.", price:22},
{link:"assets/images/pizza/Pizza-tocino.png", name:"Pizza Hawaiana", info:"Una rica pizza Para toda la familia como no.", price:18}]
let slidercont=document.querySelector(".slider")

function cardConstructor(array,position) {
    let liked="default"
    if (localStorage.getItem("currentAK")!="0") {
        getlikes().forEach(element => {
            if (element.Product==array[position].Product) {
                liked="liked"
            }
        });
    }
    const card=document.createElement("div")
    card.classList.add("slider__card", "cardmove2")
    const img=document.createElement("img")
    img.src=array[position].img
    const namecard=document.createElement("div")
    namecard.classList.add("card__nameproduct")
    namecard.textContent=array[position].Product
    const info=document.createElement("div")
    info.classList.add("card__info")
    const p=document.createElement("p")
    p.textContent=array[position].inf
    const span=document.createElement("span")
    span.textContent=`$${array[position].price}`
    
    const btnshop=document.createElement("div")
    btnshop.classList.add("card__btn","card__shopp")
    const ishop=document.createElement("i")
    ishop.classList.add("fa-brands","fa-shopify")
    const btnlike=document.createElement("div")
    btnlike.classList.add("card__btn","card__like",`${liked}`)
    const ilike=document.createElement("div")
    ilike.classList.add("fa-solid","fa-heart")
     //slider
     setTimeout(() => {
        card.classList.remove("cardmove2")
     }, 100);
    setTimeout(() => {
        card.classList.add("cardmove1")
    }, 20000);
    setTimeout(() => {
        slidercont.removeChild(card)
    }, 21000);
    //events
        card.addEventListener("mouseenter",()=>{
           info.classList.add("card__info-anmt")
           btnlike.classList.add("card__btn-anmt")
           btnshop.classList.add("card__btn-anmt")
        })
        card.addEventListener("mouseleave",()=>{
            info.classList.remove("card__info-anmt")
           btnlike.classList.remove("card__btn-anmt")
           btnshop.classList.remove("card__btn-anmt")
        })
        btnlike.addEventListener("click",()=>{
            if (btnlike.classList.contains("liked")==false) {
                btnlike.classList.add("liked")
                pushlike(array[position])
            }else{
                btnlike.classList.remove("liked")
                removelike(array[position])
            }
        })
        btnshop.addEventListener("click",()=>{
            if (btnshop.classList.contains("onorder")==false) {
                btnshop.classList.add("onorder")
                pushorder(array[position],ordercontainer)
            }else{
                btnshop.classList.remove("onorder")
                removeorder(array[position])
            }
        })
    //construction
    card.insertAdjacentElement("beforeend", img)
    card.insertAdjacentElement("beforeend",namecard)
    card.insertAdjacentElement("beforeend",info)
    info.insertAdjacentElement("beforeend",p)
    info.insertAdjacentElement("beforeend",span)
    card.insertAdjacentElement("beforeend",btnshop)
    card.insertAdjacentElement("beforeend",btnlike)
    btnshop.insertAdjacentElement("beforeend",ishop)
    btnlike.insertAdjacentElement("beforeend",ilike)
    return card

}

document.addEventListener("DOMContentLoaded",()=>{
    let position=0  
    setInterval(() => {
        slidercont.insertAdjacentElement("afterbegin",cardConstructor(getAllPizzas(),position))
        if (position<getAllPizzas().length-1) {
            position++
        }else{position=0}
    }, 21000);
    slidercont.insertAdjacentElement("afterbegin",cardConstructor(getAllPizzas(),position))
    position++
})