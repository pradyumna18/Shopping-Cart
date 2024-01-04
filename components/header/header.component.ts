import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   

  totalItem:number=0;

  constructor( private cartSerivce:CartService){}
  ngOnInit(): void {
    this.cartSerivce.getProductsData().subscribe(res=>{
      this.totalItem =res.length;
    })
  }
}
