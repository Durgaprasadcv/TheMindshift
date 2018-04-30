import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import 'hammerjs';
import { BcarouselComponent } from './bcarousel/bcarousel.component';
import { VideoComponent } from './video/video.component';
import { VgCoreModule} from 'videogular2/core';
import { VgControlsModule} from 'videogular2/controls';
import { VgOverlayPlayModule} from 'videogular2/overlay-play';
import { VgBufferingModule} from 'videogular2/buffering';
import { DialogComponent } from './dialog/dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import the library

// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Import FusionCharts Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
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
import { CdkTableModule} from '@angular/cdk/table';
import { VideoListsComponent } from './video-lists/video-lists.component';
import { ReportComponent } from './report/report.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReportRoughComponent } from './report-rough/report-rough.component';

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
import { DepartnmentComponent } from './departnment/departnment.component';
import { CharacterComponent } from './character/character.component';
import { VideoLibraryComponent } from './video-library/video-library.component';
import { ZoneComponent } from './zone/zone.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { MatSelectModule} from '@angular/material/select';
import { NativeDateAdapter} from '@angular/material';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VgStreamingModule } from 'videogular2/streaming';
import { PreviewVideoComponent } from './preview-video/preview-video.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { OrganizationComponent } from './organization/organization.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { OfflineComponent } from './offline/offline.component';
import {RatingModule} from "ngx-rating";
import { SettingsComponent } from './settings/settings.component';
import { LooginComponent } from './loogin/loogin.component';
import { UserReportComponent } from './user-report/user-report.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';
import { OverallReportComponent } from './overall-report/overall-report.component';
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
    DesignationComponent,
    DepartnmentComponent,
    CharacterComponent,
    VideoLibraryComponent,
    ZoneComponent,
    AssignTestComponent,
    UserProfileComponent,
    PreviewVideoComponent,
    OrganizationComponent,
    ActivityLogComponent,
    OfflineComponent,
    SettingsComponent,
    LooginComponent,
    UserReportComponent,
    TestDetailComponent,
    VirtualKeyboardComponent,
    LoginMobileComponent,
    OverallReportComponent
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
    MdNativeDateModule,
    FusionChartsModule.forRoot(FusionCharts, Charts),
    ReactiveFormsModule,
    VgStreamingModule,
    AngularMultiSelectModule,
    RatingModule,
    RouterModule.forRoot([
      { path: 'login',component:LoginComponent },
      { path: 'home',component: HomeComponent },
      { path: 'bcarousel',component: BcarouselComponent },
      { path: 'video/:id',component:VideoComponent },
      { path: 'dialog',component:DialogComponent },
      { path: 'video-lists/:ida',component:VideoListsComponent },
      { path: 'report',component:ReportComponent },
      { path: 'report-rough',component:ReportRoughComponent },
      { path: 'create-test',component:CreateTestComponent },
      { path: 'test-details',component:TestDetailsComponent },
      { path: 'web-preview',component:WebPreviewComponent },
      { path: 'create-user',component:CreateUserComponent },
      { path: 'test-table',component:TestTableComponent },
      { path: 'video-table',component:VideoTableComponent },
      { path: 'side-navigation',component:SideNavigationComponent },
      { path: 'designation',component:DesignationComponent },
      { path: 'departnment',component:DepartnmentComponent },
      { path: 'character',component:CharacterComponent },
      { path: 'video-library',component:VideoLibraryComponent },
      { path: 'zone',component:ZoneComponent },
      { path: 'assign-test',component:AssignTestComponent },
      { path: 'user-profile',component:UserProfileComponent },
      { path: 'preview-video',component:PreviewVideoComponent },
      { path: 'organization',component:OrganizationComponent },
      { path: 'activity-log',component:ActivityLogComponent },
      { path: 'offline',component:OfflineComponent },
      { path: 'settings',component:SettingsComponent },
      { path: 'loogin',component:LooginComponent },
      { path: 'user-report',component:UserReportComponent },
      { path: 'test-detail',component:TestDetailComponent },
      { path: 'virtual-keyboard',component:VirtualKeyboardComponent },
      { path: 'overall-report',component:OverallReportComponent },
      { path: 'login-mobile',component:LoginMobileComponent },
      { path: '', component: LooginComponent },
      { path: '**', component: LoginComponent },
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }