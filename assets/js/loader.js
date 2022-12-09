document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(() => {
        document.body.removeChild(document.querySelector(".loadercont"))
        document.body.classList.remove("overflownone")
    }, 3000);
})