import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
    products:any=[];
    allProducts:any=0;
    constructor(private cartService:CartService){}
  



    ngOnInit(): void {
    this.cartService.getProductsData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartService.getTotalAmount();
    })
    }

    removeProducts(item:any){
      this.cartService.removeCartData(item);
    }
    removeAllProducts(){
      this.cartService.removeAllCart();
    }
}
