/** 
 * @author -Ronak Patel
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
//--------------------------------------------------------------------------------------//
import { OrderRoutingModule } from './order-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    NgxMyDatePickerModule.forRoot()
  ],
  declarations: [AddComponent,
    ListComponent,
    EditComponent],
  providers: [OrderService]
})
export class OrderModule { }
