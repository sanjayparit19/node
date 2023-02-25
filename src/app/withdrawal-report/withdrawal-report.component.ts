import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-withdrawal-report',
  templateUrl: './withdrawal-report.component.html',
  styleUrls: ['./withdrawal-report.component.scss']
})
export class WithdrawalReportComponent implements AfterViewInit{
  
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    
   
  ) {
    this.Loadwithdrawal();
  }

  withdrawallist: any;
  dataSource: any;

  displayedColumns: string[] = ['id', 'name', 'amount', 'account', 'ifsc' ];

 

  ngAfterViewInit(): void {}
  Loadwithdrawal(){
    this.service.Getwithdrawal().subscribe((res) => {
      this.withdrawallist = res;
      this.dataSource = new MatTableDataSource(this.withdrawallist);     
    });
  }
}
