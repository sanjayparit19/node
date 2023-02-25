import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransDetailsComponent } from './trans-details/trans-details.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { WithdrawalReportComponent } from './withdrawal-report/withdrawal-report.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'user', component:UserlistingComponent, canActivate:[AuthGuard]},
  {path: 'deposit', component:DepositComponent},
  {path: 'withdrawal', component:WithdrawalComponent},
  {path: 'deposit-report', component:TransDetailsComponent},
  {path: 'withdrawal-report', component:WithdrawalReportComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
