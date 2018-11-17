/**
 * @author -Ronak Patel
 * This class represent entry poit of over application.
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

//-----------------------------------------------------//
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiService } from './in-memory-web-api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
