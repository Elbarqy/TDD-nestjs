import { ProductSaga } from './sagas/product.saga';
import { RemoveProductFromOrderHandler } from './commands/remove-product.command';
import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
export const CommandHandlers = [RemoveProductFromOrderHandler];
export const eventHandlers = [RemoveProductFromOrderHandler];
@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    AppService,
    ProductService,
    ...CommandHandlers,
    ...eventHandlers,
    ProductSaga,
  ],
})
export class AppModule {}
