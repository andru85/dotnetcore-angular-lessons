import { Component, Input } from '@angular/core';
import { Product } from './product';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  @Input() product: Product;
}
