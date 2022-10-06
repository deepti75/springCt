import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/data/data';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  productArray:Iproducts[] =[];
  AddCartArray:Iproducts[] =[];
  addCart:boolean=false;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productArray = this.productService.getData()
  }
  addtoCart(p:Iproducts){
    this.AddCartArray.push(p)
  }
  addProduct(){
    this.addCart = !this.addCart
  }
  onRemove(p:Iproducts){
    this.AddCartArray = this.AddCartArray.filter(ele => ele != p)
  }
}
