import { ProductRemovedFromOrderEvent } from './../events/product-removed-order.event';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProductSaga {
  @Saga()
  ProductRemoved = (event$: Observable<any>): Observable<any> => {
    return event$.pipe(
      ofType(ProductRemovedFromOrderEvent),
      map((event) => {
        console.log('heared an event ', event);
      }),
    );
  };
}
