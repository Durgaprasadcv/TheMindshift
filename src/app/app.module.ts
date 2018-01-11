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
import { BcarouselComponent } from './bcarousel/bcarousel.component';
import { VideoComponent } from './video/video.component';
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
import { VideoListsComponent } from './video-lists/video-lists.component';
import { ReportComponent } from './report/report.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReportRoughComponent } from './report-rough/report-rough.component';
// Import the library

// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Import FusionCharts Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { FormQuestionComponent } from './form-question/form-question.component';
import { OptionComponent } from './option/option.component';
import { WebPreviewComponent } from './web-preview/web-preview.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TestTableComponent } from './test-table/test-table.component';
import { VideoTableComponent } from './video-table/video-table.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DesignationComponent } from './designation/designation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    BcarouselComponent,
    VideoComponent,
    DialogComponent,
    VideoListsComponent,
    ReportComponent,
    ReportRoughComponent,
    CreateTestComponent,
    TestDetailsComponent,
    FormQuestionComponent,
    OptionComponent,
    WebPreviewComponent,
    CreateUserComponent,
    TestTableComponent,
    VideoTableComponent,
    SideNavigationComponent,
    DesignationComponent
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
    FusionChartsModule.forRoot(FusionCharts, Charts),
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'bcarousel', component: BcarouselComponent },
      { path: 'video/:id', component:VideoComponent },
      { path: 'dialog', component:DialogComponent },
      { path: 'video-lists/:ida', component:VideoListsComponent },
      { path: 'report', component:ReportComponent },
      { path: 'report-rough', component:ReportRoughComponent },
      { path: 'create-test', component:CreateTestComponent },
      { path: 'test-details', component:TestDetailsComponent },
      { path: 'web-preview', component:WebPreviewComponent },
      { path: 'create-user', component:CreateUserComponent },
      { path: 'test-table', component:TestTableComponent },
      { path: 'video-table', component:VideoTableComponent },
      { path: 'side-navigation', component:SideNavigationComponent },
      { path: 'designation', component:DesignationComponent },
      { path: '', component: LoginComponent },
 //     { path: '**', component: LoginComponent },
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
