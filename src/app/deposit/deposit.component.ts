import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})


export class DepositComponent {
  constructor(private builder: FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router:Router)
 { }



 depositForm=this.builder.group({
  id:this.builder.control('', Validators.required),
  name:this.builder.control('', Validators.required),
  amount: this.builder.control('', Validators.required),
  transaction: this.builder.control('', Validators.required) 
 });

 proceeddeposit() {
  if (this.depositForm.valid) {
      this.service.proceeddeposit(this.depositForm.value).subscribe(result => {
      this.toastr.success('Your Data has been submitted.','successfully')
      this.router.navigate(['deposit'])
    });
  } else {
    this.toastr.warning('Please enter valid data.')
  }
}

}
