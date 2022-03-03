import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable} from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { UserInfo } from 'src/app/user-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  constructor(private router:Router, private userservice:UserService) { }
  // x:any;
  data:any=[];
  loginResult:boolean= false;
  loginInitialState:boolean=false;
  // obsb:any;
  ngOnInit(): void {
    this.data=this.userservice.getUsersList();
  }
  
  login(userInfo: any){
    console.log(userInfo);
    this.loginInitialState=true;
    this.loginResult=this.userservice.checkUserList(userInfo);

    if(this.loginResult){
      console.log("Login Successful");
      this.userservice.setCurrentUserValue(userInfo.userName);
      //this.userservice.currentUser = userInfo.userName;
      this.router.navigate(['/user']);
    }
    else{
      console.log("Invalid Username and password");
    }

    this.userservice.getResultObservable().subscribe(x => {
      console.log("Login component observable value:"+x);
      // this.obsb= x;
    });
    
  }


}
