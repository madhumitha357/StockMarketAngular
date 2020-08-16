import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { FormsModule, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any;
  constructor(private service : UserserviceService) { 

  }

  ngOnInit(): void {
    this.user = {id: '', name: '', gender: '', mobile: '',email :'', password:''}
  }
  register(registerForm: any): void {
    this.service.register(this.user).subscribe((result: any) => { console.log(result); } );
    console.log(this.user);
    //alert('registration success')
    
  }

}



  



