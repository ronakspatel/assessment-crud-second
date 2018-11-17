/**
 * @author -Ronak Patel
 * @description -This class represent list  of order data.
 */
import { Component, OnInit } from '@angular/core';
//----------------------------------------------------------------------------//

import { OrderService } from '../order.service';
import { Order } from '../../order.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //to store order array type data.
  public orders:Order[];

  constructor(private service:OrderService) { 
    this.orders=[];
  }

  ngOnInit() {
    this.getOrders();
  }
  /**
   * Gets orders get data from service and store in orders .
   */
  private getOrders():void{
    this.service.getOrders().subscribe(orders=>this.orders=orders)
  }
  /**
   * Deletes order for delete record 
   * @param id 
   */
  public deleteOrder(id:number):void{
    this.service.deleteOrder(id).subscribe(()=>this.getOrders());
  }

}
