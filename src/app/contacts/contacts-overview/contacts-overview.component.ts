import { Component, OnInit } from '@angular/core'
import { Contact } from 'src/app/core/types/contact.interface'
import { NewContactService } from 'src/app/core/services/contacts/new-contact.service'
import { select, Store } from '@ngrx/store'
import * as ContactsActions from '../../core/store/contacts/actions'
import { contactsSelector, errorSelector, isLoadingSelector } from 'src/app/core/store/contacts/selectors'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/types/appState.interface'

@Component({
  selector: 'app-contacts-overview',
  templateUrl: './contacts-overview.component.html',
  styleUrls: ['./contacts-overview.component.scss'],
})
export class ContactsOverviewComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  contacts$: Observable<Contact[]>
  selectedContact: Contact | null = null

  constructor(
    private newContactService: NewContactService,
    private store: Store<AppState>
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.contacts$ = this.store.pipe(select(contactsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(ContactsActions.getContacts())
  }

  openContactDetail(contact: Contact) {
    this.selectedContact = contact
  }

  addNewContact() {
    this.newContactService.addNewContact()
  }
}
