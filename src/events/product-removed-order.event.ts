import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

export class ProductRemovedFromOrderEvent {
  constructor(
    public readonly productId: string,
    public readonly orderId: string,
  ) {}
}

@EventsHandler(ProductRemovedFromOrderEvent)
export class ProductRemovedFromOrder
  implements IEventHandler<ProductRemovedFromOrder>
{
  constructor() {}
  handle(event: ProductRemovedFromOrder) {
    console.log('recieved an event ', event);
  }
}
