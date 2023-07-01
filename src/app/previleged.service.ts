import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrevilegedService {

  constructor(public http:HttpClient) { }

  submitPrivileged(body:any){
    return this.http.post('http://localhost:3000/privileged',body)
  }

  submitUnprivileged(body:any){
    return this.http.post('http://localhost:3000/unprivileged',body)
  }
  
  Coupongetmethod(){
    return this.http.get('http://localhost:3000/Coupon')
  }


}
