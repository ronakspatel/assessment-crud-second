/** 
 * @author -Ronak Patel
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//------------------------------------------------------------------------------------//

import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'order',loadChildren:'./order/order.module#OrderModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
