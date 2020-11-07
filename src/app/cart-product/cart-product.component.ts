import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) {
    this.products = this.cartService.products;
  }

  ngOnInit(): void {
  }

  removeProduct(id: string): void {
    if (!confirm('Are you sure to remove item?')) {
      return;
    }

    this.cartService.removeProduct(id);
  }

  updateProductQuantity(id: string, event: InputEvent): void {
    const target = event.target as HTMLInputElement;
    if (target.validationMessage) {
      return alert(target.validationMessage);
    }
    this.cartService.updateProductQuantity(id, target.value);
  }

  seed(): void {
    this.cartService.seed();
    this.products = this.cartService.products;
  }
}
