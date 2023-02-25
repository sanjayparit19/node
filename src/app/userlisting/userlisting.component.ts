import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss'],
})

export class UserlistingComponent implements AfterViewInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService
   
  ) {
    this.Loaduser();
  }


  userlist: any;
  dataSource: any;
 

  ngAfterViewInit(): void {}
  Loaduser() {
      this.service.GetAll().subscribe((res) => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);     
    });
  }
  
  displayedColumns: string[] = ['id', 'name', 'email', 'password'];

  
}
