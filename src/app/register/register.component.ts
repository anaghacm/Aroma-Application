import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[A-Za-z]*')]],
    password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {

    if(this.registerForm.valid){
    var username = this.registerForm.value.username
    var password = this.registerForm.value.password
    var email = this.registerForm.value.email
    const result: any = this.ds.register(username, password, email)
      .subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl('/login')
      },
        (result: any) => {
          alert(result.error.message)
        })
    }
  }

}
