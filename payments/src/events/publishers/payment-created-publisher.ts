import { Subjects } from '../../../common/subjects';
import { Publisher} from '../../../common/base-publisher';
import { PaymentCreatedEvent } from '../../../common/payment-created-event';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
