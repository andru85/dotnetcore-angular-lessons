import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})
export class AppComponent implements OnInit {
  product: Product = new Product();
  products: Product[];
  tableMode = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts()
      .subscribe((data: Product[]) => this.products = data);
  }

  cancel() {
    this.product = new Product();
    this.tableMode = true;
  }

  save() {
    if (this.product.id == null) {
      this.dataService.createProduct(this.product)
        .subscribe((product: Product) => this.products.push(product));
    } else {
      this.dataService.updateProduct(this.product)
        .subscribe(_ => this.loadProducts());
    }
    this.cancel();
  }

  editProduct(p: Product) {
    this.product = p;
  }

  delete(p: Product) {
    this.dataService.deleteProduct(p.id)
      .subscribe(_ => this.loadProducts());
  }

  add() {
    this.cancel();
    this.tableMode = false;
  }

}
