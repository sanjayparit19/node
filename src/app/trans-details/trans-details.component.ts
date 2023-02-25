import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-trans-details',
  templateUrl: './trans-details.component.html',
  styleUrls: ['./trans-details.component.scss']
})
export class TransDetailsComponent implements AfterViewInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private dialog: MatDialog
  ) {
    this.LoadDeposit();
      
  }
  depositlist: any;
  dataSource: any;

  ngAfterViewInit(): void {}
  LoadDeposit() {

    this.service.Getdeposit().subscribe((res) => {
      this.depositlist = res;
      this.dataSource = new MatTableDataSource(this.depositlist);     
    });
    
  }
  displayedColumns: string[] = [
    'id',
    'name',
    'amount',    
    'transaction'
     
  ];

}
