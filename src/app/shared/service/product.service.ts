import { Injectable } from '@angular/core';
import { Iproducts } from 'src/app/data/data';
// interface Iproducts{
//   id?:Number;
//   pName:string;
//   pDescription:string;
// }
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products : Iproducts[]=[
    {
      id:'1',
      pName:"mobile",
      pDescription:"Information of mobile"
    }, 
    {
      id:'2',
      pName:"Laptop",
      pDescription:"Information of Laptop"
    },
    {
      id:'3',
      pName:"Tab",
      pDescription:"Information of Tab"
    }
  ]
  getData(){
    return this.products;
  }
  getSingleProduct(p:Iproducts){
    return this.products.forEach(ele => ele === p)
  }
}
