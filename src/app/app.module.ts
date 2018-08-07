import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';

import {ListingComponent} from './LogListingComponent/listing.component'

@NgModule({
  declarations: [
    LoginComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class AppModule { }
