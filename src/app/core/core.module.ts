/** 
 * @author -Ronak Patel
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//---------------------------------------------------------------------------------------------------//
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [SidebarComponent,
    TopbarComponent,
    HomeComponent],
  exports:[SidebarComponent,
    TopbarComponent],
  providers:[]
})
export class CoreModule { }
