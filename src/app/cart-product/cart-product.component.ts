import { Component, OnInit } from '@angular/core';
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

  updateProductQuantity(id: string, quantity: string): void {
    this.cartService.updateProductQuantity(id, quantity);
  }

  seed(): void {
    this.cartService.seed();
    this.products = this.cartService.products;
  }
}
