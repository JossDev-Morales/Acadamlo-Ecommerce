//require
if (localStorage.getItem("Users")==undefined){
  localStorage.setItem("Users", "[]")
}
if (localStorage.getItem("Credencials")==undefined) {
  localStorage.setItem("Credencials","[]")
}
function getUsers() {
  return JSON.parse(localStorage.getItem("Users"))
}
function upUsers(what) {
  localStorage.setItem("Users", JSON.stringify(what))
}
function getCredencials() {
  return JSON.parse(localStorage.getItem("Credencials"))
}
function newCredncials(what) {
  localStorage.setItem("Credencials",JSON.stringify(getCredencials().push(what)))
}
function newUser(nombre,correo,username,password) {
  let accesKey=correo+(Math.random()*2)+(Math.random()*2)+nombre.split("")[0]+nombre.split("")[nombre.split("").length-1]
  let Credential={username:username,password:password,accesKey:accesKey}
  newCredncials(Credential)
  let users=getUsers()
  console.log(accesKey);
  localStorage.setItem("currentAK",accesKey)
  location.reload()
}
function findCredencial(params) {
}
function NoUserActive(params) {
  
}
function FormNewUser(params) {
  
}
function FormLogIn(params) {
  
}
function UserActive(params) {
  
}
function FindUser(params) {
  
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
  NoUserActive()
}
if (Status==1) {
  
}
console.log(Status);