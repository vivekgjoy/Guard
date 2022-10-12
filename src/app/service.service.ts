import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor() { }

  auth = 0;
  LogedIn():boolean{
    if (this.auth==0){
      return true;
    }else{
      return false;
    }
  }

  role = "Admin";
  isAdmin():boolean{
  if(this.role=="Admin"){
    return true;
  }else{
    return false;
  }
}

}
