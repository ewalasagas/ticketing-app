import { Subjects } from '../../../common/subjects';
import { Publisher } from '../../../common/base-publisher';
import { OrderCreatedEvent } from '../../../common/order-created-event';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
  }
  