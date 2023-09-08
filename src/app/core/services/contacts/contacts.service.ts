import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { Contact } from '../../types/contact.interface'

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  getContacts(): Observable<Contact[]> {
    const contacts: Contact[] = [
      {
        id: 1212,
        firstName: 'Mad',
        lastName: 'Max',
        phone: '123456',
        email: 'test@test.com',
        address: 'Address',
      },
    ]

    return of(contacts).pipe(delay(1000))
  }

  addContact(contact: Contact): Observable<Contact> {
    return of({ ...contact, id: Date.now() })
  }
}
