import { Injectable } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { ContactCreationComponent } from 'src/app/contacts/contact-creation/contact-creation.component'
import { Contact } from '../../models/contact.model'

@Injectable({
  providedIn: 'root',
})
export class NewContactService {
  constructor(private modalService: NgbModal) {}

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
        //handle saving of new contact
        console.log(state.newContact)
      }
    })
  }
}
