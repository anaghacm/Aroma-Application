import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  newsletterForm= this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]    
  })
  constructor(private fb:FormBuilder, private router:Router, private ds:DataService) {
   }

  ngOnInit(): void {
  }

  onEnter(){
    if (this.newsletterForm.valid) {
      var email = this.newsletterForm.value.email  
      const result: any = this.ds.saveEmail(email)
      .subscribe((result: any) => {
        alert(result.message)
        window.location.reload()
      },
        (result: any) => {
          alert(result.error.message)
        })
    }
    }
}
