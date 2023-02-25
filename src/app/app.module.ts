import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from 'material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HighlightComponent } from './highlight/highlight.component';
import { FbcinfoComponent } from './fbcinfo/fbcinfo.component';
import { CinfoComponent } from './cinfo/cinfo.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TransDetailsComponent } from './trans-details/trans-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {ToastrModule} from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalReportComponent } from './withdrawal-report/withdrawal-report.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    HighlightComponent,
    FbcinfoComponent,
    CinfoComponent,
    PrivacyComponent,
    TransDetailsComponent,    
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UpdatepopupComponent,
    UserlistingComponent,
    WithdrawalComponent,
    DepositComponent,
    WithdrawalReportComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
