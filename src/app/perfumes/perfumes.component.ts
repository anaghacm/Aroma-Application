import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-perfumes',
  templateUrl: './perfumes.component.html',
  styleUrls: ['./perfumes.component.scss']
})
export class PerfumesComponent implements OnInit {

  perfumes: any
  category: any
  series: any
  currentUser: any


  constructor(private ds: DataService) {
    if (localStorage.getItem('category')) {
      this.category = localStorage.getItem('category')
      this.getPerfumes(this.category)
    }
    if (localStorage.getItem('series')) {
      this.series = localStorage.getItem('series')
      this.getPerfumes(this.series)
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser = localStorage.getItem('currentUser')
    }
  }

  ngOnInit(): void {
  }

  getPerfumes(category: any) {
    const result = this.ds.getPerfumes(category)
      .subscribe((result: any) => {
        this.perfumes = result.perfumes;
        // localStorage.setItem('perfumes', JSON.stringify(result.perfumes));
      },
        (result: any) => {
          alert(result.error.message)
        })
  }

  addtoCart(id: any, pname: any, price: any, url: any) {
    if (this.currentUser) {
      var num = 1
      const result = this.ds.addtoCart(id, pname, price, url, num, this.currentUser)
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
      const result = this.ds.addtoCart(id, pname, price, url, num, "guest")
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
