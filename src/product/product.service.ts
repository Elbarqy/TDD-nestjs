import { RemoveProductFromOrderCommand } from './../commands/remove-product.command';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class ProductService {
  constructor(private commandBus: CommandBus) {}
  async removeProduct(
    productId: string,
    action: RemoveProductFromOrderCommand,
  ) {
    return this.commandBus.execute(action);
  }
}
