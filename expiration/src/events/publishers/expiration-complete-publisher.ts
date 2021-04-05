import {Subjects} from '../../../common/subjects';
import {Publisher} from '../../../common/base-publisher';
import {ExpirationCompleteEvent} from '../../../common/expiration-complete-event';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
