import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http:HttpClient) {     
 }
  
  // apiurl='http://bet7eleven.com/user';
  // apiurl2='http://bet7eleven.com/deposit';
  // apiurl3='http://bet7eleven.com/withdrawal';


  apiurl='http://localhost:3000/user';
  apiurl2='http://localhost:3000/deposit';
  apiurl3='http://localhost:3000/withdrawal';
   

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }  

  GetAll()
  {
    return this.http.get(this.apiurl);
  }

  GetbyCode(code:any){
    return this.http.get(this.apiurl +'/'+ code);
  }
  GetAllRole(){
    return this.http.get('http://localhost:3000/user');
  }

  proceedregister(inputdata:any){
    return this.http.post(this.apiurl, inputdata)
  }

  proceeddeposit(inputdata:any){
    return this.http.post(this.apiurl2, inputdata);
  }
  Getdeposit()
  {
    return this.http.get(this.apiurl2);
  }

  proceedwithdrawal(inputdata:any){
    return this.http.post(this.apiurl3, inputdata)
  }

  Getwithdrawal()
  {
    return this.http.get(this.apiurl3);
  }

  updateuser(code:any, inputdata:any){
    return this.http.put(this.apiurl+'/'+code, inputdata);
  }
 
  isloggedin(){
    return sessionStorage.getItem('id')!=null;
  }
   
  Getuserrole(){
     return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
   }
}
