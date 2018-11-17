/**
 * @author -Ronak Patel
 * @description -This class represent model of order class.
 */

 /**
  * order class 
  * @prop -id represent unique identifier.
  * @prop -product represent prodect model class type.
  * @prop -customer represent customer model class type.
  * @prop -deliveryDate represent date type.
  */
export class Order{
    id:number;
    product:Product;
    customer:Customer;
    deliveryDate:Date;
    
}
/**
 * @description -This class represent model product class.
 * @prop - productId represent number type.
 * @prop - name represent string type.
 * @prop - price represent number type.
 */
export class Product{
    productId:number;
    name:string;
    price:number;


}
/**
 * @description -This class represent model customer class.
 */
export class Customer{
    customerId:number;
    firstName:string;
    lastName:string;
    address:string;
    email:string;
    contectNo:number;

}
