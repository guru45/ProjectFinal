import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup-main',
  templateUrl: './signup-main.component.html',
  styleUrls: ['./signup-main.component.css']
})
export class SignupMainComponent implements OnInit {

  signinForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder,private Userservice:UserServiceService) { }
  user:User = new User();
  ngOnInit() {
    this.signinForm = this.formBulider.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        age: ['', Validators.required],
        linkdin: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]
      }

    );
  }
  get f() { return this.signinForm.controls; }


  onSubmit() {
      this.submitted=true
      this.user.firstname=this.signinForm.get('firstname').value;
      this.user.lastname=this.signinForm.get('lastname').value;
      this.user.Phone=this.signinForm.get('phone').value;
      this.user.age=this.signinForm.get('age').value;
      this.user.linkdin=this.signinForm.get('linkdin').value;
      this.user.email=this.signinForm.get('email').value;
      this.user.password=this.signinForm.get('password').value;
      this.Userservice.createUser(this.user).subscribe(data => console.log(data),error=>console.log(error));
      
      
      // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else{
      this.router.navigateByUrl('/user-menu');
    }

  }
}
