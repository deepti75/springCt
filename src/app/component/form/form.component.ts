import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Iproducts } from 'src/app/data/data';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  productsData!:FormGroup;
  pName!:string;
  pDescription!:string;
  add:boolean= false;
  productArray:Iproducts[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productsData = new FormGroup({
      'pName': new FormControl(null,Validators.required),
      'pDescription': new FormControl(null,Validators.required)
    })
    this.productArray = this.productService.getData()
  }

  onSubmit(d:any){
    this.productArray.push(d.value);
    console.log(this.productArray);
    this.productsData.reset()
  }
  onDelete(p:Iproducts){
    this.productArray = this.productArray.filter(ele => ele !== p)
   }

   onEdit(p:Iproducts){
    
    localStorage.setItem('setProduct',p.id)
    this.add = true;
    this.productArray.forEach(ele =>{
      if(ele === p){
        this.pName = ele.pName ;
        this.pDescription = ele.pDescription
      }
    })
   }
   onUpadte(){
    let set = localStorage.getItem('setProduct');
    this.productService.getData().forEach(ele =>{
      if(ele.id == set){
        ele.pName = this.pName,
        ele.pDescription = this.pDescription
      }
    })
   }
  get PnameControl(){
    return this.productsData.get('pName') as FormControl
  }
  get PDesControl(){
    return this.productsData.get('pDescription') as FormControl
  }
}
