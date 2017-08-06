import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: LoginComponent },
      { path: '**', component: LoginComponent }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
