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
  series:any

  constructor(private ds: DataService) {
    if (localStorage.getItem('category')) {
      this.category = localStorage.getItem('category')
      this.getPerfumes(this.category)
    }
    if(localStorage.getItem('series')){
      this.series = localStorage.getItem('series')
      this.getPerfumes(this.series)
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
}
