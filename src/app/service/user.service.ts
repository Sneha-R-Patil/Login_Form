import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  routeResult:boolean=false;
  private currentUser:string="";
  private obs!: Observable<boolean>;
  
  constructor() { }

  private userList=[

    {userName:'abc1',password:'1122'},
     {userName:'pqr2',password:'3344'},
    {userName:'xyz3',password:'5566'}
    
 ];
 getUsersList(){
  return this.userList;
}

//here we check or compare the username and password from defined userlist
checkUserList(userInfo:any){
  let name=userInfo.userName;
  let pwd=userInfo.password;
  let result=this.userList.some(e => e.userName == name && e.password == pwd);
  console.log(result);
  this.routeResult=result;
  this.setResultObservable(result);
 return result;
}
//observable
setResultObservable(result:boolean){
  this.obs = new Observable(observer => {
    // console.log(22);
    observer.next(result);
  
  });
}

getResultObservable(){
  return this.obs;
}

setCurrentUserValue(currentUser:string){
  this.currentUser = currentUser;
}

getCurrentUserValue(){
  return this.currentUser;
}


}
