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
        }else{
            ordercontainer.classList.add("display-inlineflex2")
            setTimeout(() => {
                ordercontainer.classList.add("OrderCont-move")
            }, 100);
        }
    }
})
