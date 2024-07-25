import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { Product } from 'src/domain/Product';
import { ProductsService } from 'src/service/products.service';
import { createProductsSchema } from './schemas/productsSchema';
import { ApiResponseError } from 'src/common/handleErrors/handleErrors';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(
    @Res({ passthrough: true }) res: Response,
    @Query() { limit = 10, offset = 0 }: Query,
  ): ResponseData<Product> {
    try {
      res.status(HttpStatus.OK);
      return {
        data: this.productsService.getAll(),
        pagination: {
          limit,
          offset,
        },
      };
    } catch (e: any) {
      res.status(HttpStatus.NOT_FOUND);
      res.send(e.response);
    }
  }

  @Get(':productId')
  getById(
    @Res({ passthrough: true }) res: Response,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    try {
      res.status(HttpStatus.OK);
      return this.productsService.findById(productId);
    } catch (e: any) {
      return ApiResponseError(e, res);
    }
  }

  @Post()
  async create(@Res({ passthrough: true }) res: Response, @Body() product) {
    try {
      res.status(HttpStatus.CREATED);
      const request = await createProductsSchema.parseAsync(product);
      const response = this.productsService.create(new Product(request));
      return response.getApiData();
    } catch (e: any) {
      return ApiResponseError(e, res);
    }
  }

  @Put(':productId')
  update(
    @Res({ passthrough: true }) res: Response,
    @Param('productId', ParseIntPipe) productId: number,
    @Body() product: Product,
  ) {
    const response = this.productsService.update(productId, product);
    res.status(HttpStatus.OK);
    return response;
  }

  @Delete(':productId')
  delete(@Res({ passthrough: true }) res: Response, @Param() { productId }) {
    const newProduct = new Product({ id: productId });
    res.status(HttpStatus.OK);
    return newProduct.getApiData();
  }
}
