import {Subjects} from '../../../common/subjects';
import {Listener} from '../../../common/base-listener';
import {PaymentCreatedEvent} from '../../../common/payment-created-event';
import {OrderStatus} from '../../../common/types/order-status';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/order';
  
  export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
    queueGroupName = queueGroupName;
  
    async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
      const order = await Order.findById(data.orderId);
  
      if (!order) {
        throw new Error('Order not found');
      }
  
      order.set({
        status: OrderStatus.Complete,
      });
      await order.save();
  
      msg.ack();
    }
  }
  