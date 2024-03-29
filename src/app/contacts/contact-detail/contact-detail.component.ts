import { Component, Input } from '@angular/core'
import { Contact } from 'src/app/core/types/contact.interface'

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent {
  @Input() contact: Contact = { id: null, firstName: '', lastName: '', phone: '', email: '', address: '' }
}
