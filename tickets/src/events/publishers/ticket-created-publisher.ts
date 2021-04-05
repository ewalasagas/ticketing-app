import {  Subjects } from '../../../common/subjects';
import { Publisher} from '../../../common/base-publisher';
import { TicketCreatedEvent } from '../../../common/ticket-created-event';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

