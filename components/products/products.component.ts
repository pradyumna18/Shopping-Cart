import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { TaddyService } from 'src/app/service/taddy.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
   
  productList:any;


  constructor(private taddy:TaddyService,private cartService:CartService){}
  ngOnInit(): void {
       this.taddy.getProduct().subscribe(res=>{
        this.productList=res;
        this.productList.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price})
        });
       })
  }


  addToCart(item:any){
    this.cartService.addToCart(item);
  }

}
