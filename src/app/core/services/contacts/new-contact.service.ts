import { Injectable } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store'
import { ContactCreationComponent } from 'src/app/contacts/contact-creation/contact-creation.component'
import { Contact } from '../../types/contact.interface'
import * as ContactsActions from '../../store/contacts/actions'

@Injectable({
  providedIn: 'root',
})
export class NewContactService {
  constructor(
    private modalService: NgbModal,
    private store: Store
  ) {}

  addNewContact() {
    const modalRef: NgbModalRef = this.modalService.open(ContactCreationComponent, {
      centered: true,
      backdrop: 'static',
      animation: false,
    })

    modalRef.componentInstance.state.subscribe((state: { close: boolean; newContact?: Contact }) => {
      if (state.close) {
        modalRef.close()
      }
      if (state.newContact) {
        this.store.dispatch(ContactsActions.addContact({ contact: state.newContact }))
      }
    })
  }
}
