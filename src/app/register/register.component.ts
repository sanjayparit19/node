import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {  
  constructor(private builder: FormBuilder, private toastr:ToastrService,
     private service:AuthService, private router:Router)
  { }

  registerForm=this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    role: this.builder.control(''),
    isactive: this.builder.control(false)
  });
  
  proceedregister() {
    if (this.registerForm.valid) {
        this.service.proceedregister(this.registerForm.value).subscribe(result => {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate(['login'])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}