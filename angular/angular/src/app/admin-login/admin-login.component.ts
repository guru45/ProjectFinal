import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminserviceService } from '../adminservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({templateUrl: 'admin-login.component.html'})
export class AdminloginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    ad :Admin = new Admin();
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private adminService:AdminserviceService
    ) {}
    
    
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
                this.adminService.getAdmin(this.loginForm.get('username').value).subscribe(data => {
                this.ad = data;

                if(this.ad==null){
                    alert('Invalid Credentials');
                }
                else if(this.ad.username==this.loginForm.get('username').value && this.ad.password==this.loginForm.get('password').value){
                    this.router.navigateByUrl('/admin-menu');
                }
                else{
                    alert('Invalid Credentials');
                }
            })
        }
        
    }
}








 