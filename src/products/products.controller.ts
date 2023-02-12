/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductsModule } from './products.module';
import { ProductsService } from './products.service';
import { UpdateProductDTO } from './dto/update-product.dto';
import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  NotFoundException,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  [x: string]: any;
  constructor(public productService: ProductsService) { }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = this.productsService.getById(id);
    if (!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');
    this.productsService.deleteById(id);
    return { success: true };
  }
  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');

    this.productsService.updateById(id, productData);
    return { success: true };
  }

}
