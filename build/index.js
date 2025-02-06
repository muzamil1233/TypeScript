"use strict";
// const a = 23;
// alert(a);
// class Product  implements productType {
//   private id : string = String (Math.random()* 1000);
//   public name : string;
//   public price : number ;
//   public stock : number;
//   constructor (name : string, price : number, stock : number, id : string){
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//   }
// }
//   interface giveId {
//     getId : ()=> string ;
//   }
// class Product  implements productType , giveId{
//   private id : string = String (Math.random()* 1000);
//   constructor(
//     public name : string,
//   public price : number ,
//   public stock : number,
//   ){}
//   getId = ()=> this.id;
// }
// const abhi = new Product ("Macbook",200,2)
//Type assertion
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = < HTMLElement> document.getElementById("btn") ;
// // const btn = document.getElementById("btn")!;
// btn.onClick;
// const img = document.getElementById("myImg") as HTMLImageElement;
// img.src;
const form = document.getElementById("myForm");
const inputElement = document.getElementById("myInput");
form.onSubmit = (e) => {
    e.preventDefault();
    const value = Number(inputElement.value);
    console.log(value);
    console.log(typeof inputElement.value);
};
