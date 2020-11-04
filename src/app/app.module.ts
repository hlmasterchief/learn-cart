import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartProductComponent,
    CartFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
