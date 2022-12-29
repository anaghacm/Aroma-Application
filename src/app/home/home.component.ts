import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carts:any
  currentUser:any
  random:any

  constructor(private ds:DataService) {  
    this.getCart()
    this.getRandom()
    if (localStorage.getItem('currentUser')) {
      this.currentUser = localStorage.getItem('currentUser')
    }
}

  ngOnInit(): void {
  }

  getCart() {
        const result = this.ds.getCart('guest')
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

  getRandom(){
    const result = this.ds.getRandom()
      .subscribe((result: any) => {
        this.random = result.perfumes
      },
        (result: any) => {
          alert(result.error.message)
        })
  }

  addtoCart(id: any, pname: any, price: any, url: any,discount:any) {
    if (this.currentUser) {
      var num = 1
      const result = this.ds.addtoCart(id, pname, price, url, num,discount, this.currentUser)
        .subscribe((result: any) => {
          alert(result.message)
          window.location.reload()
          // localStorage.setItem('perfumes', JSON.stringify(result.perfumes));
        },
          (result: any) => {
            alert(result.error.message)
          })
    }
    else {
      var num = 1
      const result = this.ds.addtoCart(id, pname, price, url, num,discount, "guest")
        .subscribe((result: any) => {
          alert(result.message)
          window.location.reload()
          // localStorage.setItem('perfumes', JSON.stringify(result.perfumes));
        },
          (result: any) => {
            alert(result.error.message)
          })
    }
  }

  pushDetails(perfume: any) {
    localStorage.setItem('details', JSON.stringify(perfume))
  }

}
