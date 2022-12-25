import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {


  forgotForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[A-Za-z]*')]],
    password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]*')]],
    repassword: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]*')]]
  })
  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  resetpassword() {
    // if(this.loginForm.valid){
    var username = this.forgotForm.value.username
    var password = this.forgotForm.value.password
    var repassword = this.forgotForm.value.repassword
    if (password == repassword) {
      const result: any = this.ds.resetpassword(username, password)
        .subscribe((result: any) => {
          alert(result.message)
          this.router.navigateByUrl('/login')
        },
          (result: any) => {
            alert(result.error.message)
          })
    }
    else {
      alert('Enter the correct password')
    }
    // }
  }
}
