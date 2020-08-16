import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;

  user:any;
  constructor(private service : UserserviceService,private router : Router) { }

  ngOnInit(): void {

  }
  getUser():void{
    console.log(this.email)
    this.service.getUser(this.email,this.password).subscribe((data: any) => { this.user = data; });
    console.log(this.user)
    if(this.user === null){
      alert('Invalid')
    }else{
      alert('Success');
      this.router.navigate(['mainpage']);
      
    }


  }

}
