let menuPizzas=[{link:"/assets/images/PizzaQueso.jfif", name:"Pizza De Queso", info:"Una rica pizza Para toda la familia como no.", price:15},
{link:"/assets/images/PizzaQueso.jfif", name:"Pizza De Peperoni", info:"Una rica pizza Para toda la familia como no.", price:20},
{link:"/assets/images/PizzaQueso.jfif", name:"Pizza De Champiñon", info:"Una rica pizza Para toda la familia como no.", price:22},
{link:"/assets/images/PizzaQueso.jfif", name:"Pizza Hawaiana", info:"Una rica pizza Para toda la familia como no.", price:18}]
let slidercont=document.querySelector(".slider")
function cardConstructor(array,position) {
    const card=document.createElement("div")
    card.classList.add("slider__card", "cardmove2")
    const img=document.createElement("img")
    img.src=array[position].link
    const namecard=document.createElement("div")
    namecard.classList.add("card__nameproduct")
    namecard.textContent=array[position].name
    const info=document.createElement("div")
    info.classList.add("card__info")
    const up_down=document.createElement("div")
    up_down.classList.add("card__up-down")
    const i=document.createElement("i")
    i.classList.add("fa-solid","fa-chevron-up")
    const p=document.createElement("p")
    p.textContent=array[position].info
    const span=document.createElement("span")
    span.textContent=`$${array[position].price}`
    const btnshop=document.createElement("div")
    btnshop.classList.add("card__btn","card__shopp")
    const ishop=document.createElement("i")
    ishop.classList.add("fa-brands","fa-shopify")
    const btnlike=document.createElement("div")
    btnlike.classList.add("card__btn","card__like")
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
     //construction
    card.insertAdjacentElement("beforeend", img)
    card.insertAdjacentElement("beforeend",namecard)
    card.insertAdjacentElement("beforeend",info)
    info.insertAdjacentElement("beforeend", up_down)
    up_down.insertAdjacentElement("beforeend",i)
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
        slidercont.insertAdjacentElement("afterbegin",cardConstructor(menuPizzas,position))
        if (position<menuPizzas.length-1) {
            position++
        }else{position=0}
        console.log(position,menuPizzas.length-1);
    }, 21000);
    slidercont.insertAdjacentElement("afterbegin",cardConstructor(menuPizzas,position))
    position++
})