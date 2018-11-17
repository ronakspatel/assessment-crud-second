/**
 * @author -Ronak Patel
 * @description -This class represent over main service to communicate wetween inmemorywebapi to component
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//----------------------------------------------------------------------------------------//
import { Order } from '../order.model';

@Injectable()
export class OrderService {
  //Create for store some url.
  private baseUrl: string;
  //inject HttpClient service ot perform crud operation.
  constructor(private http: HttpClient) {
    this.baseUrl = 'api/orders';
  }

  /**
   * Gets orders create this function to get all data and pass to list component.
   * @returns orders 
   */
  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }
 /**
  * Gets order create this function to get single record and pass to edit component.
  * @param id to store id of number type
  * @returns order 
  */
 public getOrder(id: number): Observable<Order> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Order>(url);
  }
  /**
   * Adds order create for this to add data in in memory web api .
   * @param order to store order model type
   * @returns order 
   */
  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order);
  }
  
  /**
   *  deleteOredr  create for this function to delete data in in memory web api.
   * @param id to store order id in numper type
   * @returns oredr 
   */
  public deleteOrder(id: number): Observable<Order> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Order>(url);
  }
  /**
   * Updates order create for this function to update record in in memory web api.
   * @param order 
   * @returns order 
   */
  public updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl, order)
  }

}
