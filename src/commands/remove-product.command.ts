import { Product } from './../product/product.model';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

export class RemoveProductFromOrderCommand {
  constructor(
    public readonly productId: string,
    public readonly orderId: string,
  ) {}
}

@CommandHandler(RemoveProductFromOrderCommand)
export class RemoveProductFromOrderHandler
  implements ICommandHandler<RemoveProductFromOrderCommand>
{
  constructor(private publisher: EventPublisher) {}
  async execute(command: RemoveProductFromOrderCommand): Promise<any> {
    const { productId, orderId } = command;
    console.log(
      'removed the product with id of ',
      productId,
      ' from the order of ',
      orderId,
    );
    const product = this.publisher.mergeObjectContext(
      new Product('SerialNumber++'),
    );
    product.removeProductFromOrder(orderId);
    product.commit();
  }
}
