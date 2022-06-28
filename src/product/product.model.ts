import { ProductRemovedFromOrderEvent } from './../events/product-removed-order.event';
import { AggregateRoot } from '@nestjs/cqrs';

export class Product extends AggregateRoot {
  constructor(private id: string) {
    super();
  }
  removeProductFromOrder(productId: string) {
    this.apply(new ProductRemovedFromOrderEvent(this.id, 'orderId'));
  }
}
