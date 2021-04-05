import { Subjects } from '../../../common/subjects';
import { Publisher } from '../../../common/base-publisher';
import { OrderCancelledEvent } from '../../../common/order-cancelled-event';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
