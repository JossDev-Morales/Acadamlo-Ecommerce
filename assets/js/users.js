import { carritoconstructor,ordercontainer } from "../js/Order.js";
//require
'<i class="fa-solid fa-key"></i>'
if (localStorage.getItem("Users")==undefined){
  localStorage.setItem("Users", "[]")
}
if (localStorage.getItem("Credencials")==undefined) {
  localStorage.setItem("Credencials","[]")
}
if (localStorage.getItem("currentAK")==undefined) {
  localStorage.setItem("currentAK","0")
}
//usercontainer animation
let userContainer=document.querySelector(".UsersCont")
let orderContainer=document.querySelector(".OrderCont")
let Userbtn=document.querySelector(".nav__icons__users")
Userbtn.addEventListener("click",()=>{
 if (orderContainer.classList.contains("display-inlineflex2")) {
  userContainer.classList.add("display-inlineflex2")
  orderContainer.classList.remove("OrderCont-move")
  setTimeout(() => {
    userContainer.classList.add("UsersCont-move")
    orderContainer.classList.remove("display-inlineflex2")
  }, 400);
 }else{
  if (userContainer.classList.contains("display-inlineflex2")) {
    userContainer.classList.remove("UsersCont-move")
    setTimeout(() => {
      userContainer.classList.remove("display-inlineflex2")
    }, 400);
    document.body.classList.remove("overflow-hidden")
  }else{
    userContainer.classList.add("display-inlineflex2")
    setTimeout(() => {
      userContainer.classList.add("UsersCont-move")
    }, 100);
    document.body.classList.add("overflow-hidden")
  }
 }
})
function closebtn(cont) {
  const closebtn=document.createElement("div")
  closebtn.classList.add("closebtn")
  const i=document.createElement("i")
  i.classList.add("fa-solid","fa-xmark")
  closebtn.insertAdjacentElement("beforeend",i)
  closebtn.addEventListener("click",(e)=>{
    setTimeout(() => {
      cont.removeChild(e.target.parentElement.parentElement)
    }, 300);
  })
  return closebtn
}
//
function AlertCard(title,message) {
  const alertCard=document.createElement("div")
  alertCard.classList.add("alertcard")
  const alerttitle=document.createElement("h2")
  alerttitle.textContent=title
  const p =document.createElement("p")
  p.textContent=message
  alertCard.insertAdjacentElement("beforeend",alerttitle)
  alertCard.insertAdjacentElement("beforeend",p)
  setTimeout(() => {
    alertCard.classList.add("alertcard-move1")
  }, 100);
  setTimeout(() => {
    alertCard.classList.add("alertcard-move2")
  }, 4000);
  setTimeout(() => {
    document.body.removeChild(alertCard)
  }, 4500);
  document.body.insertAdjacentElement("beforeend",alertCard)
}

function getUsers() {
  return JSON.parse(localStorage.getItem("Users"))
}
function upUsers(what) {
  localStorage.setItem("Users", JSON.stringify(what))
}

function newCredencials(what) {
  localStorage.setItem("Credencials",JSON.stringify(what))
}

function newUser(nombre,correo,username,password) {
  let accesKey="AK"+Math.round((Math.random()*5))+Math.round((Math.random()*5))+Math.round((Math.random()*5))+Math.round((Math.random()*5))+Math.round((Math.random()*5))+Math.round((Math.random()*5))
  let Credential={username:username,password:password,accesKey:accesKey}
  let credentials=getCredencials()
  credentials.push(Credential)
  newCredencials(credentials)
  localStorage.setItem("currentAK",accesKey)
  let Users=getUsers()
  let NewUser={accesKey:accesKey, name:nombre, mail:correo, username:username, order:[], like:[], pagemode:"ligth"}
  Users.push(NewUser)
  upUsers(Users)
  location.reload()
  
}
function getCredencials() {
  return JSON.parse(localStorage.getItem("Credencials")) 
}
function findCredencial(IuserName,IpassWord) {
  if (getCredencials().length==0) {
    AlertCard("Sin Usuarios","No existe un registro de usuarios en este dispositivo, deberas crear uno registrandote, lo sentimos...")
  }else{
    getCredencials().forEach(element => {
      console.log(element);
      if (element.username==IuserName&&element.password==IpassWord) {
        localStorage.setItem("currentAK",element.accesKey)
        setTimeout(() => {
          location.reload()
        }, 500);
      }else{
        AlertCard("Lo sentimos...","No se a encontrado ningun usuario, verifica que tu usuario y contraseña sean correctos.")
      }
    });
  }
}
function FormNewUser(container) {
  const form=document.createElement("div")
  form.classList.add("user__form")
  const formtitle=document.createElement("div")
  formtitle.classList.add("user__form__title")
  formtitle.textContent="Registrate"
  const inputName=document.createElement("input")
  inputName.classList.add("user__form__input")
  inputName.setAttribute("placeholder","Nombre")
  const inputMail=document.createElement("input")
  inputMail.classList.add("user__form__input")
  inputMail.setAttribute("placeholder","Correo")
  const inputUser=document.createElement("input")
  inputUser.classList.add("user__form__input")
  inputUser.setAttribute("placeholder","Usuario")
  const inputpassW=document.createElement("input")
  inputpassW.classList.add("user__form__input")
  inputpassW.setAttribute("placeholder","Contraseña")
  const formbtn=document.createElement("div")
  formbtn.classList.add("user__form__btn")
  formbtn.textContent="Ready"
  formbtn.addEventListener("click",()=>{newUser(inputName.value,inputMail.value,inputUser.value,inputpassW.value)})
  form.insertAdjacentElement("beforeend",closebtn(container))
  form.insertAdjacentElement("beforeend",formtitle)
  form.insertAdjacentElement("beforeend",inputName)
  form.insertAdjacentElement("beforeend",inputMail)
  form.insertAdjacentElement("beforeend",inputUser)
  form.insertAdjacentElement("beforeend",inputpassW)
  form.insertAdjacentElement("beforeend",formbtn)
  container.insertAdjacentElement("beforeend",form)
}
function FormLogIn(container) {
  const form=document.createElement("div")
  form.classList.add("user__form")
  const formtitle=document.createElement("div")
  formtitle.textContent="Inicia sesion"
  formtitle.classList.add("user__form__title")
  const inputUser=document.createElement("input")
  inputUser.setAttribute("placeholder","Usuario")
  inputUser.classList.add("user__form__input")
  const inputpassW=document.createElement("input")
  inputpassW.classList.add("user__form__input")
  inputpassW.setAttribute("placeholder","Contraseña")
  const formbtn=document.createElement("div")
  formbtn.classList.add("user__form__btn")
  formbtn.textContent="Ready"
  formbtn.addEventListener("click",()=>{findCredencial(inputUser.value,inputpassW.value)})
  form.insertAdjacentElement("beforeend",closebtn(container))
  form.insertAdjacentElement("beforeend",formtitle)
  form.insertAdjacentElement("beforeend",inputUser)
  form.insertAdjacentElement("beforeend",inputpassW)
  form.insertAdjacentElement("beforeend",formbtn)
container.insertAdjacentElement("beforeend",form)
}
function NoUserActive(container) {
  const titulo=document.createElement("h2")
  titulo.textContent="Registrate o Inicia sesion"
  const img=document.createElement("img")
  img.src="assets/images/notfound.png"
  const p=document.createElement("p")
  p.textContent="Si no tienes una cuenta aun, que esperas, es gratis. Solo tienes que registarte aqui abajo..."
  const loginbtn=document.createElement("div")
  loginbtn.classList.add("btnUser","btnlogin")
  loginbtn.textContent="Inicia sesion"
  const registerbtn=document.createElement("div")
  registerbtn.classList.add("btnUser","btnregister")
  registerbtn.textContent="Registrate ya"
  loginbtn.addEventListener("click", ()=>{FormLogIn(userContainer)})
  registerbtn.addEventListener("click", ()=>{FormNewUser(userContainer)})
  container.insertAdjacentElement("beforeend",titulo)
  container.insertAdjacentElement("beforeend",img)
  container.insertAdjacentElement("beforeend",p)
  container.insertAdjacentElement("beforeend",loginbtn)
  container.insertAdjacentElement("beforeend",registerbtn)
}
function FindUser() {
  let users=getUsers()
  let user
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
      UserActive(e,userContainer)
    }
  })
}
function UserActive(User, Container) {
  const title=document.createElement("h2")
  title.textContent="Bienvenido "+User.username
  const btnLogOut=document.createElement("div")
  btnLogOut.classList.add("users1__btn__logout")
  btnLogOut.textContent="Cerrar sesion"
  btnLogOut.addEventListener("click",()=>{
    localStorage.setItem("currentAK","0")
    location.reload()
  })
  const Containerinf=document.createElement("div")
  Containerinf.classList.add("users1__contInfos")
  Containerinf.insertAdjacentElement("beforeend",Pinformation(User))
  Containerinf.insertAdjacentElement("beforeend",Uinformation(User))
  Container.insertAdjacentElement("beforeend",title)
  Container.insertAdjacentElement("beforeend",Containerinf)
  Container.insertAdjacentElement("beforeend",getLists(User))
  Container.insertAdjacentElement("beforeend",btnLogOut)
}
function getLists(User) {
  const listsCont=document.createElement("div")
  listsCont.classList.add("users1__listcont")
  const btnlike =document.createElement("div")
  btnlike.classList.add("Users1__listsbtn")
  const iLike=document.createElement("i")
  iLike.classList.add("fa-solid","fa-heart")
  const btnshop =document.createElement("div")
  btnshop.classList.add("Users1__listsbtn")
  const ishop=document.createElement("i")
  ishop.classList.add("fa-brands","fa-shopify")
  const spanlike=document.createElement("span")
  spanlike.textContent=User.like.length
  const spanorder=document.createElement("span")
  spanorder.textContent=User.order.length
  btnlike.insertAdjacentElement("beforeend",iLike)
  btnlike.insertAdjacentElement("beforeend",spanlike)
  btnshop.insertAdjacentElement("beforeend",ishop)
  btnshop.insertAdjacentElement("beforeend",spanorder)
  listsCont.insertAdjacentElement("beforeend",btnlike)
  listsCont.insertAdjacentElement("beforeend",btnshop)
  return listsCont
}
function Pinformation(User) {
  const Pinformation=document.createElement("div")
  Pinformation.classList.add("User1__infcont")
  const title=document.createElement("h3")
  title.textContent="Informacion Personal"
  const infElementN=document.createElement("div")
  infElementN.textContent="Nombre: "+User.name
  infElementN.classList.add("user1__infElement")
  const infElementM=document.createElement("div")
  infElementM.classList.add("user1__infElement")
  infElementM.textContent="Mail: "+User.mail
  Pinformation.insertAdjacentElement("beforeend", title)
  Pinformation.insertAdjacentElement("beforeend",infElementN)
  Pinformation.insertAdjacentElement("beforeend",infElementM)
  return Pinformation
}
function Uinformation(User) {
  let password
  getCredencials().forEach(e=>{
    if (e.accesKey==User.accesKey) {
      password=e.password
    }
  })
  const Pinformation=document.createElement("div")
  Pinformation.classList.add("User1__infcont")
  const title=document.createElement("h3")
  title.textContent="Informacion De Usuario"
  const infElementP=document.createElement("div")
  infElementP.classList.add("user1__infElement")
  infElementP.textContent="Contraseña: "+password
  const infElementA=document.createElement("div")
  infElementA.classList.add("user1__infElement")
  infElementA.textContent="AccesKey: "+User.accesKey
  Pinformation.insertAdjacentElement("beforeend", title)
  Pinformation.insertAdjacentElement("beforeend", infElementP)
  Pinformation.insertAdjacentElement("beforeend",infElementA)
  
  return Pinformation
}
function changeData(Type,) {
  
}
function getlikes(params) {
  let users=getUsers()
  let likes
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
     likes= e.like
    }
  })
  return likes
}
function getOrder() {
  let users=getUsers()
  let order
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
      order= e.order
    }
  })
  return order
}
function pushlike(element) {
  let users=getUsers()
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
      e.like.push(element)
    }
  })
  localStorage.setItem("Users",JSON.stringify(users))
}
function pushorder(element,container) {
  let users=getUsers()
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
      e.order.push(element)
      container.insertAdjacentElement("beforeend",carritoconstructor(element))
    }
  })
  localStorage.setItem("Users",JSON.stringify(users))
}
function removelike(element) {
  let users=getUsers()
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
      let iter =0
      e.like.forEach(el =>{
        if (el.Product==element.Product) {
         if (iter==0) {
          iter++
          e.like.splice(e.like.indexOf(el),1)
          localStorage.setItem("Users",JSON.stringify(users))
         }
        }
      })
    }
  })
}
function removeorder(element) {
  let users=getUsers()
  let accesKey=localStorage.getItem("currentAK")
  users.forEach(e =>{
    if (e.accesKey==accesKey) {
      let iter =0
      e.order.forEach(el =>{
        if (el.Product==element.Product) {
         if (iter==0) {
          iter++
          e.order.splice(e.order.indexOf(el),1)
          localStorage.setItem("Users",JSON.stringify(users))
         }
        }
      })
    }
  })
}
//start
let Status
if (localStorage.getItem("currentAK")=="0") {
  Status=0
}
if (localStorage.getItem("currentAK")!="0") {
  Status=1
}
if (Status==0) {
  NoUserActive(userContainer)
}
if (Status==1) {
  FindUser()
}
export{getlikes,getUsers,getOrder,pushlike,pushorder,removelike,removeorder,FindUser,AlertCard,Status}