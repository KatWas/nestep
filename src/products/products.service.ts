import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';
import { ProductsController } from './products.controller';
import { ProductsModule } from './products.module';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ExternalProductDto } from './dto/external-product.dto';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }
}

public getById(id: string): Product | null {
  return db.products.find((p) => p.id === id);
}

public deleteById(id: Product['id']): void {
  db.products = db.products.filter((p) => p.id !== id);
}
return this.getProductById(id);


public create(productData: Omit<Product, 'id'>): Product {
  const newProduct = { ...productData, id: uuidv4() };
  db.products.push(newProduct);
  return newProduct;
}

public updateById(id: Product['id'], productData: Omit<Product, 'id'>): void {
  db.products = db.products.map((p) => {
    if (p.id === id) {
      return { ...p, ...productData };
    }
    return p;
  });
}
export class productsService{}