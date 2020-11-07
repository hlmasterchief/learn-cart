import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})
export class CartFooterComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  updateDiscount(coupon: string): void {
    const bool = this.cartService.updateDiscount(coupon);
    if (!bool) {
      alert('Enter coupon 1111 or 2010');
    }
  }
}
