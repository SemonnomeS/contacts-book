import { Component, EventEmitter, Output } from '@angular/core'
import { UntypedFormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-creation',
  templateUrl: './contact-creation.component.html',
  styleUrls: ['./contact-creation.component.scss'],
})
export class ContactCreationComponent {
  @Output() state: EventEmitter<any> = new EventEmitter()

  newContactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
  })

  constructor(private fb: UntypedFormBuilder) {}

  submit() {
    this.newContactForm.markAllAsTouched()

    if (!this.newContactForm.valid) {
      return
    }

    this.state.emit({
      close: true,
      newContact: this.newContactForm.value,
    })
  }

  close() {
    this.state.emit({ close: true })
  }
}
