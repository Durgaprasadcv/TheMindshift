import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { DialogComponent } from './dialog/dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

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
    WebresponseComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FlexLayoutModule,
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
      { path: 'dialog', component:DialogComponent },
      { path: '', component: LoginComponent },
 //     { path: '**', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
