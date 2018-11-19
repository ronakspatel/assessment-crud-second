/**
 * @author -Ronak Patel
 * @description -This class represent edit  of order data.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//---------------------------------------------------------------------------//
import { OrderService } from '../order.service';
import { Order } from '../../order.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //created to store data
  public order: Order;
  //created for formgroup 
  public profileForm: FormGroup;
  constructor(private service: OrderService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loadForm();
    this.editOrder();
  }
  // this method  define profileForm.
  private loadForm(): void {
    this.profileForm = this.fb.group({
      id: [''],
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
  /**
   * Edits order this method define to call service and send data to loadData function. 
   */
  private editOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getOrder(id).subscribe(order => {
      this.loadData(order)
    })

  }
  /**
   * Determines whether submit on to submite updated data and send to service.
   * @param order to stode fromData.
   */
  public onSubmit(order: Order): void {
    this.service.updateOrder(order).subscribe(() => this.router.navigate(['/order/list']));
  }
  /**
   * Loads data  in initial level
   * @param order to stode fromData.
   */
  public loadData(order: Order): void {
    this.profileForm.patchValue({
      id: order.id,
      deliveryDate: order.deliveryDate,
      product: {
        id: order.product.id,
        name: order.product.name,
        price: order.product.price
      },
      customer: {
        id: order.customer.id,
        firstName: order.customer.firstName,
        lastName: order.customer.lastName,
        address: order.customer.address,
        email: order.customer.email,
        contectNo: order.customer.contectNo
      }
    });


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


}
