import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  checkoutForm!: FormGroup;
  order: Order = new Order();

  paymentTypes: string[] = ['Cash', 'Card'];

  get name(): AbstractControl {
    return this.checkoutForm.get('name')!;
  }

  get address(): AbstractControl {
    return this.checkoutForm.get('address')!;
  }

  get paymentType(): AbstractControl {
    return this.checkoutForm.get('paymentType')!;
  }

  constructor(private cartService: CartService) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }


  ngOnInit(): void {

    this.checkoutForm = new FormGroup({
      name: new FormControl('', [
          Validators.required
      ]),
      address: new FormControl('', [
          Validators.required
      ]),
      paymentType: new FormControl('', [
        Validators.required
      ])
  });

  }

  createOrder(){
    if(this.checkoutForm.invalid){
      return;
    }

    this.order.name =this.name.value;
    this.order.address = this.address.value;
    this.order.paymentType = this.paymentType.value;

    console.log(this.order);
  }
}
