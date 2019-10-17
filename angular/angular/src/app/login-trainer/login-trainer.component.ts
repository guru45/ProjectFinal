import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerserviceService } from '../trainerservice.service';

@Component({templateUrl: 'login-trainer.component.html'})
  
export class LoginTrainerComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    ad :Trainer = new Trainer();
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private trainerService:TrainerserviceService
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
                this. trainerService.getTrainer(this.loginForm.get('username').value).subscribe(data => {
                this.ad = data;

                if(this.ad==null){
                    alert('Invalid Credentials');
                }
                else if(this.ad.email==this.loginForm.get('username').value && this.ad.password==this.loginForm.get('password').value){
                    this.router.navigateByUrl('/trainer-main');
                }
                else{
                    alert('Invalid Credentials');
                }
            })
        }
        
    }
  }