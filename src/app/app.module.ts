import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuardService } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Toastr } from './toastr/toastr';
import {KSSwiperModule} from 'angular2-swiper';
import { DenguComponent } from './dengu/dengu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DenguComponent,
  ],
  exports:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule.forRoot(),
    KSSwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [AuthGuardService,ToastrService,Toastr],
  bootstrap: [AppComponent],
})
export class AppModule {}
