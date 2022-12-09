import { Status,getUsers} from "../js/users.js";
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
        document.querySelector("header").classList.remove("position-fixed")
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
    document.querySelector("header").classList.add("position-fixed")
   }, 500);
}

})
//dark-light

if (Status==1) {
    let users=getUsers()

  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
        if (e.pagemode=="dark") {
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }else if (e.pagemode=="light") {
            document.body.classList.remove("light")
            document.body.classList.add("light")
        }
    }
  })
}
let switchtheme=document.querySelector(".nav__icons__theme")
switchtheme.addEventListener("click",()=>{
    let pagemode
    document.body.classList.toggle("dark")
    document.body.classList.toggle("light")
    if (document.body.classList.contains("dark")) {
        pagemode="dark"
    }else{pagemode="light"}
    let Ak=localStorage.getItem("currentAK")
    let users =JSON.parse(localStorage.getItem("Users"))
   users.forEach(e=>{
        if (e.accesKey=Ak) {
            e.pagemode=pagemode
            localStorage.setItem("Users",JSON.stringify(users))
        }
    })
})
