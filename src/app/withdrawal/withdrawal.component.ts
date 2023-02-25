import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent {

  constructor(private builder: FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router:Router)
 { }

 withdrawalForm=this.builder.group({
  id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
  name:this.builder.control('', Validators.required),
  account: this.builder.control('', Validators.required),
  amount: this.builder.control('', Validators.required),
  ifsc: this.builder.control('', Validators.required),
 });


 proceedwithdrawal() {
  if (this.withdrawalForm.valid){
    this.service.proceedwithdrawal(this.withdrawalForm.value).subscribe(result => {
      this.toastr.success('Requested has been submitted.',' successfully')
    });
  } else {
    this.toastr.warning('Please enter valid data.')
  }
}

}