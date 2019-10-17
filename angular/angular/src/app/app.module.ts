import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { SignupComponent } from './signup/signup.component';
import { SignupMainComponent } from './signup-main/signup-main.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserCompletedComponent } from './user-completed/user-completed.component';
import { TrainerHeaderComponent } from './trainer-header/trainer-header.component';
import { TrainerMainComponent } from './trainer-main/trainer-main.component';
import { MentorSkillsComponent } from './mentor-skills/mentor-skills.component';
import { MentorWithdrawComponent } from './mentor-withdraw/mentor-withdraw.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MentorCompletedComponent } from './mentor-completed/mentor-completed.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserCurrentComponent } from './user-current/user-current.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { AdminloginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupTrainetComponent } from './signup-trainet/signup-trainet.component';
import { MentornavComponent } from './mentornav/mentornav.component';
import { UsernavComponent } from './usernav/usernav.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginTrainerComponent } from './login-trainer/login-trainer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMainComponent,
    SignupComponent,
    SignupMainComponent,
    LoginMainComponent,
    SearchHeaderComponent,
    UserSearchComponent,
    UserCompletedComponent,
    TrainerHeaderComponent,
    TrainerMainComponent,
    MentorSkillsComponent,
    MentorWithdrawComponent,
    UserHeaderComponent,
    UserMenuComponent,
    MentorCompletedComponent,
    UserPaymentComponent,
    UserCurrentComponent,
    AdminMenuComponent,
    AdminCourseComponent,
    AdminEditComponent,
    AdminPaymentsComponent,
    AdminloginComponent,
    
    SignupTrainetComponent,
    
    MentornavComponent,
    
    UsernavComponent,
    
    LoginTrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
