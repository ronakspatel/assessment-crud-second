import {InMemoryDbService} from 'angular-in-memory-web-api'

//-----------------------------------------------------------------//
import { Order } from './order.model';
/**
 * create class for use InMemoryWebApiService to implement  InMemoryDbService and their method implememt
 */
export class InMemoryWebApiService implements InMemoryDbService{
  /**
   * This function create for database 
   */
  createDb(){
    const orders:Order[]=[
      {id:1,deliveryDate:new Date('2018-12-12'),product:{id:11,name:'MI',price:20000},customer:{id:111,firstName:'Ronak',lastName:'Patel',address:'jujwa mata street valsad',email:'ronaks@gmail.com',contectNo:1234567890}},
      {id:2,deliveryDate:new Date('2019-01-06'),product:{id:12,name:'Apple',price:100000},customer:{id:112,firstName:'Roshni',lastName:'Patel',address:'jujwa mata street valsad',email:'roshnis@gmail.com',contectNo:9876543210}}
    ]
    return{orders}
  }
 

}
