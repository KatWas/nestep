import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import * as cors from 'cors';
import { AppController } from './app.controller';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}