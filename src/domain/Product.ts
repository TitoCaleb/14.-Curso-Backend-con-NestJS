export class Product {
  id: number;

  name: string;

  description?: string;

  price?: number;

  stock?: number;

  image?: string;

  constructor(data?: Partial<Product>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  getApiData() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
    };
  }
}
