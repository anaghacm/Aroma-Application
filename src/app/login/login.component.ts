import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[A-Za-z]*')]],
    password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]*')]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {

    // if(this.loginForm.valid){
    var username = this.loginForm.value.username
    var password = this.loginForm.value.password
    
    const result: any = this.ds.login(username, password)
      .subscribe((result: any) => {
        alert(result.message)
        // this.router.navigateByUrl('')
      },
        (result: any) => {
          alert(result.error.message)
        })
    // }
  }
}
