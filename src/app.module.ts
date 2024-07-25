import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { CategoriesController } from './controller/categories.controller';
import { CustomersController } from './controller/customers.controller';
import { OrdersController } from './controller/orders.controller';
import { UsersController } from './controller/users.controller';
import { BrandsController } from './controller/brands.controller';
import { ProductsService } from './service/products.service';
import { BrandsService } from './service/brands.service';
import { CustomersService } from './service/customers.service';
import { OrdersService } from './service/orders.service';
import { UsersService } from './service/users.service';
import { CategoriesService } from './service/categories.service';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    CategoriesController,
    CustomersController,
    OrdersController,
    UsersController,
    BrandsController,
  ],
  providers: [
    ProductsService,
    BrandsService,
    CustomersService,
    OrdersService,
    UsersService,
    CategoriesService,
  ],
})
export class AppModule {}
