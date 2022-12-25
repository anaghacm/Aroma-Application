import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  constructor(private ds: DataService, private router: Router) { }

  perfumes: any

  ngOnInit(): void {
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

}
