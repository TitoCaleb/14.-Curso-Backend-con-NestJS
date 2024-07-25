import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/domain/Product';

@Injectable()
export class ProductsService {
  private counter = 3;
  private products: Product[] = [
    new Product({ id: 1, name: 'Product 1', price: 100 }),
    new Product({ id: 2, name: 'Product 2', price: 200 }),
    new Product({ id: 3, name: 'Product 3', price: 300 }),
  ];

  getAll() {
    if (this.products.length === 0) {
      throw new NotFoundException({
        message: `Products not found`,
        name: 'ProductNotFound',
      });
    }
    return this.products;
  }

  findById(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException({
        message: `Product with id ${id} not found`,
        name: 'ProductNotFound',
      });
    }

    return product;
  }

  create(product: Product) {
    this.counter = this.counter + 1;
    const newProduct = new Product({ id: this.counter, ...product });
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, product: Product) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      return null;
    }
    this.products[index] = new Product({ ...this.products[index], ...product });
    return this.products[index];
  }
}
