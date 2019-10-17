import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({templateUrl: 'login-main.component.html'})
  
export class LoginMainComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    ad :User = new User();
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private userService:UserServiceService
  ){}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else{
                this. userService.getUser(this.loginForm.get('username').value).subscribe(data => {
                this.ad = data;

                if(this.ad==null){
                    alert('Invalid Credentials');
                }
                else if(this.ad.email==this.loginForm.get('username').value && this.ad.password==this.loginForm.get('password').value){
                    this.router.navigateByUrl('/user-menu');
                }
                else{
                    alert('Invalid Credentials');
                }
            })
        }
        
    }
  }