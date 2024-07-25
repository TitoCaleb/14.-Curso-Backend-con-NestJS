import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getById(@Param() { categoryId, productId }): string {
    return (
      'This is a category with id: ' +
      categoryId +
      ' and product with id: ' +
      productId
    );
  }
}
