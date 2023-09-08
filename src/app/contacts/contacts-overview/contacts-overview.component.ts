import { Component } from '@angular/core'
import { Contact } from 'src/app/core/models/contact.model'
import { NewContactService } from 'src/app/core/services/contacts/new-contact.service'

const CONTACTS: Contact[] = [
  {
    firstName: 'Mad',
    lastName: 'Max',
    phone: '123456',
    email: 'test@test.com',
    address: 'Address',
  },
  {
    firstName: 'Mad',
    lastName: 'Max',
    phone: '123456',
    email: 'test@test.com',
    address: 'Address',
  },
]

@Component({
  selector: 'app-contacts-overview',
  templateUrl: './contacts-overview.component.html',
  styleUrls: ['./contacts-overview.component.scss'],
})
export class ContactsOverviewComponent {
  contacts = CONTACTS

  constructor(private newContactService: NewContactService) {}

  addNewContact() {
    this.newContactService.addNewContact()
  }
}
