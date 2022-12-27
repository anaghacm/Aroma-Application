import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: any
  subtotal:Number=0
  carts: any;
  constructor(private ds:DataService) {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')||'')
      this.subtotal=this.cart.map((a:any)=>a.totalprice).reduce((a:any,b:any)=>{return a+b});
    }
    
  }

  ngOnInit(): void {
  }

  removeItem(productid:any,username:any){
    const result = this.ds.removeItem(productid,username)
    .subscribe((result: any) => {
      alert(result.message)
      this.getCart(username)
      window.location.reload()
      // localStorage.setItem('perfumes', JSON.stringify(result.perfumes));
    },
      (result: any) => {
        alert(result.error.message)
      })
  }

  getCart(username: any) {
    const result = this.ds.getCart(username)
      .subscribe((result: any) => {
        this.carts = result.carts
        localStorage.setItem('cart', JSON.stringify(this.carts))
        if (this.carts) {
        }
      },
        (result: any) => {
          alert(result.error.message)
        })
  }

}
