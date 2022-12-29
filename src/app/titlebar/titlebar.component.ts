import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})


export class TitlebarComponent implements OnInit {
  currentUser: any = '';

  constructor(private ds: DataService, private router: Router) {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = localStorage.getItem('currentUser')
      this.getCart(this.currentUser)
    }
    else {
      this.currentUser = ''
      this.getCart("guest")
    }

  }

  perfumes: any
  carts: any
  emptycart: Number = 1
  items: Number = 0

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear()
    this.items = 0
    this.currentUser = ''
  }
  category() {
    localStorage.setItem('category', 'all')
    localStorage.removeItem('series')
    // console.log(this.router.url)
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  categorymen() {
    localStorage.setItem('category', 'men')
    localStorage.removeItem('series')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  categorywomen() {
    localStorage.setItem('category', 'women')
    localStorage.removeItem('series')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  categoryunisex() {
    localStorage.setItem('category', 'unisex')
    localStorage.removeItem('series')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  serieslove() {
    localStorage.setItem('series', 'love')
    localStorage.removeItem('category')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  seriesedge() {
    localStorage.setItem('series', 'edge')
    localStorage.removeItem('category')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  seriesprivate() {
    localStorage.setItem('series', 'private')
    localStorage.removeItem('category')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  serieswild() {
    localStorage.setItem('series', 'wild')
    localStorage.removeItem('category')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }
  seriesheritage() {
    localStorage.setItem('series', 'heritage')
    localStorage.removeItem('category')
    if (this.router.url == '/perfumes') {
      window.location.reload()
    }
  }

  getCart(username: any) {
    const result = this.ds.getCart(username)
      .subscribe((result: any) => {
        this.carts = result.carts
        this.items = this.carts.length
        localStorage.setItem('cart', JSON.stringify(this.carts))
        if (this.carts) {
          this.emptycart = 0
        }
      },
        (result: any) => {
          // alert(result.error.message)
        })
  }

  viewCart() {
    localStorage.setItem('cart', JSON.stringify(this.carts))
    this.router.navigateByUrl('/cart')
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    alert('Closing')
  }

}
