import { FindUser, getOrder,AlertCard,getUsers,removeorder } from "../js/users.js";
let usercontainer=document.querySelector(".UsersCont")
let ordercontainer=document.querySelector(".OrderCont")
let orderbtn=document.querySelector(".nav__icons__order")
orderbtn.addEventListener("click",()=>{

    if (usercontainer.classList.contains("display-inlineflex2")) {
        usercontainer.classList.remove("UsersCont-move")
        ordercontainer.classList.add("display-inlineflex2")
        setTimeout(() => {
            usercontainer.classList.remove("display-inlineflex2")
            ordercontainer.classList.add("OrderCont-move")
        }, 400);
    }else{
        if (ordercontainer.classList.contains("display-inlineflex2")) {
            ordercontainer.classList.remove("OrderCont-move")
            setTimeout(() => {
                ordercontainer.classList.remove("display-inlineflex2")
            }, 400);
            document.body.classList.remove("overflow-hidden")
        }else{
            ordercontainer.classList.add("display-inlineflex2")
            setTimeout(() => {
                ordercontainer.classList.add("OrderCont-move")
            }, 100);
            setTimeout(() => {
                document.body.classList.add("overflow-hidden")
            }, 200);
        }
    }
})
function carritoconstructor (array) {
    const bmcarrito=document.createElement("div")
    bmcarrito.classList.add("box-order-product")
    const bmimg=document.createElement("img")
    bmimg.src=array.img
    const bmh2=document.createElement("h2")
    bmh2.textContent=array.Product
    const bmspan=document.createElement("span")
    bmspan.textContent=array.price
    const bmclose=document.createElement("div")
    bmclose.classList.add("btn","btn__close")
    const iX=document.createElement("i")
    iX.classList.add("fa-solid","fa-xmark")
    bmclose.insertAdjacentElement("beforeend",iX)
    //events
        bmclose.addEventListener("click",(e)=>{
            ordercontainer.removeChild(e.target.parentElement)
            let users=getUsers()
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
      let iter =0
      e.order.forEach(el =>{
        if (el.Product==array.Product) {
         if (iter==0) {
          iter++
          e.order.splice(e.order.indexOf(el),1)
          localStorage.setItem("Users",JSON.stringify(users))
          
         }
        }
      })
    }
  })
        })
    // constructor
    bmcarrito.insertAdjacentElement("beforeend", bmimg)
    bmcarrito.insertAdjacentElement("beforeend", bmh2)
    bmcarrito.insertAdjacentElement("beforeend", bmspan)
    bmcarrito.insertAdjacentElement("beforeend", bmclose)
    return bmcarrito
}
function buyit(obj,price,user) {
    
    const contbuyit=document.createElement("div")
    contbuyit.classList.add("order_cont_buyit")
    const btnbuy=document.createElement("div")
    const items=document.createElement("div")
    const total=document.createElement("span")
    const clear=document.createElement("div")
    clear.classList.add("order__btn","btn_clear_order")
    clear.textContent="Limpiar"
    btnbuy.classList.add("order__btn")
    items.classList.add("order__items")
    items.textContent=obj.length+" objetos"
    btnbuy.textContent="Comprar Orden"
    total.textContent=price+"$"
    //events
    btnbuy.addEventListener("click",()=>{
        AlertCard("Lo sentimos...","No puedes comprar por el momento, intenalo mas tarde")
    })
    clear.addEventListener("click",()=>{
        let getUser=getUsers()
        getUser.forEach(e=>{
            let users=getUsers()
            let order
            let accesKey=localStorage.getItem("currentAK")
            users.forEach(e =>{
              if (e.accesKey==accesKey) {
                order= e.order
                order.forEach(el =>{
                    removeorder(el)
                })
              }
            })
        })
        location.reload()
    })
    contbuyit.insertAdjacentElement("beforeend",btnbuy)
    contbuyit.insertAdjacentElement("beforeend",clear)
    contbuyit.insertAdjacentElement("beforeend",items)
    contbuyit.insertAdjacentElement("beforeend",total)
    return contbuyit
}
document.addEventListener("DOMContentLoaded",()=>{
    getOrder().forEach(element => {
        ordercontainer.insertAdjacentElement("beforeend",carritoconstructor(element))
    });
    let price=0
    getOrder().forEach(element => {
        price+=element.price

    });
    console.log(price);
    ordercontainer.insertAdjacentElement("afterbegin",buyit(getOrder(),price))})
export{carritoconstructor,ordercontainer}