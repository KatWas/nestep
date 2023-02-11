/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  NotFoundException,
  Post,
  UseGuards,
  Body,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  [x: string]: any;
  constructor(private productService: ProductsService) {}

  @Get()
  

  @Get(':id')
  async getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ExternalProductDto> {
    const product = await this.productService.getProductById(id);
    if (product === undefined || product === null) {
      throw new NotFoundException();
    }
    return this.mapProductToExternal(product);
  }

  @Post()
  @UseGuards(RoleGuard)
  async addProduct(
    @Body() _item_: CreateProductDto,
  ): Promise<ExternalProductDto> {
    return this.mapProductToExternal(
      await this.productService.addProduct(_item_),
    );
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteProduct(@Param('id') _id_: string): Promise<void> {
    return await this.productService.deleteProduct(_id_);
  }

  @Put(':id')
  async updateProduct(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() product: UpdateProductDto,
  );

  
}
