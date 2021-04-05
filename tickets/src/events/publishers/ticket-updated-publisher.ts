import {  Subjects } from '../../../common/subjects';
import { Publisher} from '../../../common/base-publisher';
import { TicketUpdatedEvent } from '../../../common/ticket-updated-event';
import { natsWrapper } from '../../nats-wrapper';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}