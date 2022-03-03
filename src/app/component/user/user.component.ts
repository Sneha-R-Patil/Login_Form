import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService:UserService) { }
  activeUserName:string="";
   selectedPlan: any;
   selectedAmount:any;
   planName: string[] = ['Plan A', 'Plan B', 'Plan C'];
   

  ngOnInit(): void {
   // this.activeUserName =this.userService.currentUser;
    this.activeUserName = this.userService.getCurrentUserValue();
    this.userService.getResultObservable().subscribe((x: any) => {
      console.log("User component observable value:"+x);
    });
  }

  // message:string="";
 
  onSubmit(value:any){
    // debugger;
    console.log(value);
    this.selectedPlan=value.plan;
    this.selectedAmount=value.amount;
    // this.message="Transcation successful";
    // return this.message;
    
    
  }
  

}
