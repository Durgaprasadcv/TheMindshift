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
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { StrcarouselComponent } from './strcarousel/strcarousel.component';
import { LanselectionComponent } from './lanselection/lanselection.component';
import { BcarouselComponent } from './bcarousel/bcarousel.component';
import { PrserviceComponent } from './prservice/prservice.component';
import { ChapterComponent } from './chapter/chapter.component';
import { RegisComponent } from './regis/regis.component';
import { SmenuComponent } from './smenu/smenu.component';
import { VideoComponent } from './video/video.component';
import { WebresponseComponent } from './webresponse/webresponse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    MyNewComponentComponent,
    StrcarouselComponent,
    LanselectionComponent,
    BcarouselComponent,
    PrserviceComponent,
    ChapterComponent,
    RegisComponent,
    SmenuComponent,
    VideoComponent,
    WebresponseComponent
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
      { path: 'lanselection', component: LanselectionComponent },
      { path: 'bcarousel', component: BcarouselComponent },
      { path: 'strcarousel', component:StrcarouselComponent },
      { path: 'chapter', component:ChapterComponent },
      { path: 'regis', component:RegisComponent },
      { path: 'smenu', component:SmenuComponent },
      { path: 'video', component:VideoComponent },
      { path: '', component: StrcarouselComponent },
      { path: '**', component: LoginComponent }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
