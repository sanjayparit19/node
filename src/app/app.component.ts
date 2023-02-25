import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'bet7eleven';
  
  isadminuser=false;
  ismenurequired=false;
  ismenu = false;

  constructor(private route:Router, private service:AuthService){
      let role=sessionStorage.getItem('role');
      if(role == 'admin'){
      this.isadminuser=true;
   }
  }
  
  ngDoCheck(): void {
    let currenturl = this.route.url;
    let role= sessionStorage.getItem('role');
    if(currenturl=='/login' || currenturl=='/register'){
      this.ismenurequired=false;
    }else{
      this.ismenurequired=true;
    }
    
    if(this.service.Getuserrole()==='admin'){
      this.isadminuser=true;
    }else{
      this.isadminuser=false;
    }    
  }
}
