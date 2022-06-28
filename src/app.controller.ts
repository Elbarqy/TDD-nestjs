import { ProductRemovedFromOrderEvent } from './events/product-removed-order.event';
import { RemoveProductFromOrderCommand } from './commands/remove-product.command';
import { Controller, Get } from '@nestjs/common';
import { EventBus, CommandBus } from '@nestjs/cqrs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private eventBus: EventBus,
    private commandBus:CommandBus) {}

  @Get()
  getHello(): string {
    console.log('works');
    // this.eventBus.publish(
    //   new ProductRemovedFromOrderEvent(
    //     'my product id',
    //     'order id from controller',
    //   ),
    // );
    this.commandBus.execute(new RemoveProductFromOrderCommand("ctr productId","ctr orderId"))
    return 'HELLO';
  }
}
