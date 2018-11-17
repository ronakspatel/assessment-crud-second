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
        productId: ['', Validators.required],
        name: ['', Validators.required],
        price: ['', Validators.required]
      }),
      customer: this.fb.group({
        customerId: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        contectNo: ['', Validators.required]
      })
    })
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
