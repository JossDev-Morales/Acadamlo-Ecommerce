
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
        {Product:"Dip Bolognesa",img:"assets/images/dips/Dip-Bolognesa.jpg",inf:"",price:1.50},
        {Product:"Dip Bufalo",img:"assets/images/dips/Dip-Bufalo.jpg",inf:"",price:1.50},
        {Product:"Dip Ranch",img:"assets/images/dips/Dip-Ranch.jpg",inf:"",price:1.50}
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
export {getAllProducts,getAllPizzas,Menu}

