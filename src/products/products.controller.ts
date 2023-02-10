import { Controller, Get, getAll, getById } from '@nestjs/common';


@Controller('products')

@Get('/')
getAll(): any {
    return this.productsService.getAll();
};

@Get('/:id')
public getById(@Param('id') id: string) {
    return this.productsService.getById(id);
}
@Delete('/:id')
deleteById(@Param('id') id: string) {
  this.productsService.deleteById(id);
  return { success: true };
}

export class ProductsController { }
