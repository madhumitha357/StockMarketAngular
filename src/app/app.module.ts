import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControlDirective } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule } from '@angular/common/http';
import { GraphsComponent } from './graphs/graphs.component';
import { ChartsModule } from 'ng2-charts';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EichermotComponent } from './eichermot/eichermot.component';
import { TataComponent } from './tata/tata.component';
import { CiplaComponent } from './cipla/cipla.component';
import { AshokleyComponent } from './ashokley/ashokley.component';
import { NseComponent } from './nse/nse.component';
import { BseComponent } from './bse/bse.component';


const appRoot: Routes = [{path: '', component: HomepageComponent},
                         {path: 'login', component: LoginComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'mainpage', component: MainpageComponent},
                        {path: 'graph', component: GraphsComponent},
                        {path: 'ashokley', component: AshokleyComponent},
                        {path: 'cipla', component: CiplaComponent},
                        {path: 'tata', component: TataComponent},
                        {path: 'eichermot', component: EichermotComponent},
                        {path: 'Nifty', component: NseComponent},
                        {path: 'Sensex', component: BseComponent},



                        
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GraphsComponent,
    MainpageComponent,
    HomepageComponent,
    EichermotComponent,
    TataComponent,
    CiplaComponent,
    AshokleyComponent,
    NseComponent,
    BseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(appRoot),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
