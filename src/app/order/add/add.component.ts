/**
 * @author -Ronak Patel
 * @description -This class represent add  of order data.
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//----------------------------------------------------------------------------------------//
import { OrderService } from '../order.service';
import { Order } from '../../order.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  //created for formgroup 
  public profileForm: FormGroup;

  constructor(private service: OrderService,
    private fb: FormBuilder,
    private router: Router) {

  }

  ngOnInit() {
    this.loadForm();
  }
  // this method  define profileForm.
  private loadForm(): void {
    this.profileForm = this.fb.group({
      deliveryDate: ['', Validators.required],
      product: this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        price: ['', Validators.required]
      }),
      customer: this.fb.group({
        id: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        contectNo: ['', Validators.required]
      })
    })
  }
  // order
 public get deliveryDate() {
    return this.profileForm.get('deliveryDate');
  }

  //product 
 public get productId() {
    return this.profileForm.get('product.id');
  }
 public get name() {
    return this.profileForm.get('product.name');
  }
 public get price() {
    return this.profileForm.get('product.price');
  }

  //customer
 public get customerId() {
    return this.profileForm.get('customer.id');
  }
 public get firstName() {
    return this.profileForm.get('customer.firstName');
  }
 public get lastName() {
    return this.profileForm.get('customer.lastName');
  }
 public get address() {
    return this.profileForm.get('customer.address');
  }
 public get email() {
    return this.profileForm.get('customer.email');
  }
 public get contectNo() {
    return this.profileForm.get('customer.contectNo');
  }

  /**
   * Determines whether submit on to submite updated data and send to service.
   * @param order to stode fromData.
   */
  public onSubmit(formData): void {
    formData.deliveryDate = formData.deliveryDate.jsdate;
    let order: Order = formData;
    this.service.addOrder(order).subscribe(() => this.router.navigate(['/order/list']));
  }

}
