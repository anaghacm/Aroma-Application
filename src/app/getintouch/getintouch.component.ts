import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.scss']
})
export class GetintouchComponent implements OnInit {

  gitForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phonenumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    message: ['', [Validators.required, Validators.pattern('[A-Za-z0-9 ]*')]]
  })
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  saveMessage() {
    if (this.gitForm.valid) {
      var name = this.gitForm.value.name
      var email = this.gitForm.value.email
      var phonenumber = this.gitForm.value.phonenumber
      var message = this.gitForm.value.message
      const result: any = this.ds.saveMessage(name, email, phonenumber, message)
        .subscribe((result: any) => {
          alert(result.message)
          this.router.navigateByUrl('')
        },
          (result: any) => {
            alert(result.error.message)
          })
      // }
    }
  }
}
