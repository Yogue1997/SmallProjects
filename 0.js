const wishList = [{
    title : "PS5",
    price : 1200,
},
{
    title : "Tesla",
    price : 40000,
},
{
    title : "House",
    price : 250000,
},
{
    title : "Gucci Bag",
    price : 400,
},
{
    title : "Tv",
    price : 1000,
}
]
// const totalPrice = wishList.reduce((a,b) => {
//     return a+b.price
// },0 ) 
// console.log(`The total price is ${totalPrice}`);



const totalPrice = wishList.reduce((a,b) => a + b.price,0 )
console.log(totalPrice);