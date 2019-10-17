import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
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
import { SignupTrainetComponent } from './signup-trainet/signup-trainet.component';
import { MentornavComponent } from './mentornav/mentornav.component';
import { UsernavComponent } from './usernav/usernav.component';
import { LoginTrainerComponent } from './login-trainer/login-trainer.component';




const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
{ path: 'header', component: HeaderComponent},
{ path: 'signup', component: SignupComponent},
{ path: 'signup-main', component: SignupMainComponent},
{ path: 'login-main', component:LoginMainComponent},
{ path: 'search-header', component:SearchHeaderComponent},
{ path: 'user-search', component:UserSearchComponent},
{ path: 'user-completed', component:UserCompletedComponent},
{ path: 'trainer-header', component:TrainerHeaderComponent},
{ path: 'trainer-main', component:TrainerMainComponent},
{ path: 'mentor-skills', component:MentorSkillsComponent},
{ path: 'mentor-withdraw', component:MentorWithdrawComponent},
{ path: 'user-header', component:UserHeaderComponent},
{ path: 'user-menu', component:UserMenuComponent},
{ path: 'mentor-completed', component:MentorCompletedComponent},
{ path: 'user-payment', component:UserPaymentComponent},
{ path: 'user-current', component:UserCurrentComponent},
{ path: 'admin-menu', component:AdminMenuComponent},
{ path: 'admin-course', component:AdminCourseComponent},
{ path: 'admin-edit', component:AdminEditComponent},
{ path: 'admin-payment', component:AdminPaymentsComponent},
{ path: 'admin-login', component:AdminloginComponent},
{ path: 'signup-trainet', component:SignupTrainetComponent},
{ path: 'mentornav', component:MentornavComponent},
{ path: 'usernav', component:UsernavComponent},
{path :'login-trainer',component:LoginTrainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
