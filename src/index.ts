// const a = 23;
// alert(a);

// decleration of datatypes in ts 


//   1 way 
// let b : string ;
// let nambo: number;
// let check : boolean

// 2 way
// let b = <string>"muzzamil";


// 3way 
// let sign: string = "muzamil"

// 4 way

// let surname : string|number|boolean;
// surname : "muzamil"


// const func = (a :number , b : number ) =>{
//     console.log(a,b);
//     return a + b;
// }

// type userName = (a : number , b : number) => number;

// const data : userName = (a  , b  ) =>{
//     console.log(a,b);
//     return a + b;
// }


// object 

// type obj = {
//     name: string;
//     age: number;
//     city: string;
// };
// const obj1: obj {
//     name: "muzamil",
//     age: 23,
//     city: "kashmir "
// }



// functions 

// type funcType = (n: number , b :number , c : number)=>number;

// const func: funcType = (a,b,c) => {
//     if(typeof c === "undefined") return a*b;
//     return a + b + c;
// }
// func(25,26)



// func with obj 


// type  GetDataType = (product :{
//     name: string;
//     price: number;
//     quantity: number;
// })=> void ;

// const  getData : GetDataType= (product )=> {
//     console.log(product);
// }
// const product
//     never type 
// const ErrorHandler = (): never =>{
//   throw new Error();
// }


// type themeMode = "light"  | "dark" ;

// const mode: themeMode = "dark"


//      classes 


//      class Player {
//       private height ;
//       public weight ;
//       protected power;


//       constructor (height : number , weight: number, power: number){
//         this.height = height;
//         this.weight = weight;
//         this.power = power;
//       }

//       get getMyHeight(): number {
//         return this.height;
//       }
//      // on this return type is not allowed 
//       set changeHeight (val : number ){
//         this.height = val;
//       }
//      }

//      const muzi = new Player(100,50,200);
//      console.log(muzi.weight)


//      class plater extends Player{
//       special : boolean;
//       constructor(height : number , weight : number , power : number ,special : boolean){
//         super(height , weight , power);
//         this.special = special;
       
//       }
//      }

//      const abhi = new plater(100,200,300,true)
//      console.log("weight" , abhi.weight);
//      console.log("height " ,abhi.getMyHeight());

//   interface productType {
//     name : string;
//     price : number;
//     quantity : number;
//     id : string;
//     offer ?: boolean;
//   }

//   class Product  implements productType {
//     private id : string = String (Math.random()* 1000);
//     public name : string;
//     public price : number ;
//     public stock : number;
   
//     constructor (name : string, price : number, stock : number, id : string){
//       this.name = name;
//       this.price = price;
//       this.stock = stock;
//     }

//   }

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


// Type assertion

// const btn = document.getElementById("btn") as HTMLElement;
// const btn = < HTMLElement> document.getElementById("btn") ;
// // const btn = document.getElementById("btn")!;
// btn.onClick;


// const img = document.getElementById("myImg") as HTMLImageElement;
// img.src;


//      Dom manipilation in ts 
// const form = document.getElementById("myForm") as HTMLFormElement;
// const inputElement = document.getElementById("myInput") as HTMLInputElement;
// form.onSubmit = (e :SubmitEvent )=>{
//   e.preventDefault();
//    const value = Number(inputElement.value)
//  console.log(value);
//  console.log(typeof value)

//  const h2 = document.createElement("h2");
//  h2.textContent = String(value+20)

//  const body = document .querySelector("body")!;
//  body.appendChild(h2);
// }



// interface person {
//   // [key : string ]: string;  // one method is this another method is 
//   name : string;
//   email : string;
  
// }

// const myObj :person={
//   name : "muzamil",
  
//   email : "muzamiln213@gmail.com"
// }

// const getName = (): string=>{
//   return myObj.name;
// }

// const getEmail = (): string=>{
//   return myObj.email;
// }
// const getData = (key: keyof person) : string =>{
//   return myObj[key];
// }
// getData("name")


//   utility 
//   type userType = {
//     name : string;
//     age : number;
//     city : string;
//  }
// type user2 = partial <userType>
// type user2 = Required < userType>

// Record <Keys,Type >
    // type user = {
    //      name : string,
    //      email: string;
    // };
    // type user2 = Record<"name" | "email", string>;

    // interface UserInfo {
    //     age : number;
    // }
    // type UserName = "john" | "levi" | "elon" | "jack";
    // const users : Record< UserName,UserInfo> ={
    //         john :{age : 34},
    //         levi :{age : 35},
    //         elon :{age : 45},
    //         jack :{age : 24},
    
    // }


                      //  GENENRIC
//  const func = (n: number): number=>{
//  return n;
// };
// console.log(func(10));

// const func = <customType >(n:customType): customType =>{
//     let text: customType;
//     return n;
// }
// const ans = func(10);


// type person = {
//     name : string;
//     age : number;
// }
// const func = <T>(n:T):T =>{
//     return n;
// }

// const person1: person = {name : "muzamil", age : 25}

// const ans = func <string >("person1");




// type person = {
//     name : string;
//     age : number;
// }

// const func = <T, U extends T>(n: T, o: U): {n:T, o: U} =>{
//        return {n, o};
// };
// const ans = func<number, number >(20,34.3);


// type person = {
//       name : string;
//         age : number;
//      };


//      type person2 = {
//         name : string;
//         age : number;
//         email : string
//      };



//      const user: person = {
//         name : "muzamil",
//         age : 25
//      }

//      const user2: person2 = {
//         name : "muzamil",
//         age : 25,
//         email : "muzamiln213@gmail.com"
//      }
//      const func = <T, U extends T>(n: T, o: U): {n:T, o: U} =>{
//         return {n, o};
//      };

//      const ans = func<person, person2>(user, user2);

    type person = {
        name : string;
        age : number;
     }

    const users : person[]=[
        {
            name : "muzamil",
            age : 25
        },
        {
            name : "elon",
            age : 45
        },
        {
            name : "jack",
            age : 24
        }
    ]

    const filterByPeoples =<T, U extends keyof T> (arr : T[], property : U,value : T[U] ): T[]=>{
        return arr.filter(item => item[property] === value);
    };

    const filteredPeopleByName = filterByPeoples(users , "name","muzamil");