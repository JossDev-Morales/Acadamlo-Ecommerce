let menubtn=document.querySelector(".menubtn")
let menu=document.querySelector("nav")
menubtn.addEventListener("click",()=>{
    if (menubtn.classList.contains("onAnimation")) {
        menubtn.classList.remove("onAnimation")
        document.querySelector("#path2").classList.remove("path2animation")
        document.querySelector("#path3").classList.remove("path3animation")
        setTimeout(() => {
            document.querySelector("#path1").classList.remove("path1animation") 
        }, 200);
        menu.classList.remove("toside")
        setTimeout(() => {
            menu.classList.remove("display-inlineflex")
        }, 200);
        document.body.classList.remove("overflow-hidden")
    }else{
    menubtn.classList.add("onAnimation")
    document.querySelector("#path1").classList.add("path1animation")
    setTimeout(() => {
        document.querySelector("#path2").classList.add("path2animation")
        document.querySelector("#path3").classList.add("path3animation")
    }, 200)
    menu.classList.add("display-inlineflex")
    setTimeout(() => {
        menu.classList.add("toside")
    }, 200);
    setTimeout(() => {
        document.body.classList.add("overflow-hidden")
    }, 350);
}

})