import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-perfumedetails',
  templateUrl: './perfumedetails.component.html',
  styleUrls: ['./perfumedetails.component.scss']
})
export class PerfumedetailsComponent implements OnInit {
  perfume: any
  currentUser:any
  qnty:any=1
  constructor(private ds:DataService) {
    if (localStorage.getItem('details')) {
      this.perfume=JSON.parse(localStorage.getItem('details') || '')
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser = localStorage.getItem('currentUser')
    }
  }

  ngOnInit(): void {
  }


  addtoCart(id: any, pname: any, price: any, url: any) {
    if (this.currentUser) {
      const result = this.ds.addtoCart(id, pname, price, url, this.qnty, this.currentUser)
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
}
