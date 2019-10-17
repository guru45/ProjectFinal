import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainer } from '../trainer';
import { TrainerserviceService } from '../trainerservice.service';


@Component({
  selector: 'app-signup-trainet',
  templateUrl: './signup-trainet.component.html',
  styleUrls: ['./signup-trainet.component.css']
})
export class SignupTrainetComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder,private trainerservice:TrainerserviceService) { }
  trainer:Trainer = new Trainer();
  ngOnInit() {
    this.signinForm = this.formBulider.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        age: ['', Validators.required],
        qualification:[''],
        skills:[''],
        sell:[''],
        work:[''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]
      }

    );
    
  }
 
  get f() { return this.signinForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.trainer.firstname=this.signinForm.get('firstname').value;
    this.trainer.lastname=this.signinForm.get('lastname').value;
    this.trainer.Phone=this.signinForm.get('phone').value;
    this.trainer.age=this.signinForm.get('age').value;
    this.trainer.qualification=this.signinForm.get('qualification').value;
    this.trainer.skills=this.signinForm.get('skills').value;
    this.trainer.email=this.signinForm.get('email').value;
    this.trainer.password=this.signinForm.get('password').value;
    this.trainerservice.createMentor(this.trainer).subscribe(data=>console.log(data),error=> console.log(error));
    // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else{
      this.router.navigateByUrl('/trainer-main');
    }

  }
}
