import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ContactCreationComponent } from './contact-creation.component'

describe('ContactCreationComponent', () => {
  let component: ContactCreationComponent
  let fixture: ComponentFixture<ContactCreationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactCreationComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ContactCreationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit the newContact when submit() is called', () => {
    const newContact = {
      firstName: 'Name',
      lastName: 'Last name',
      phone: '123',
      email: 'email@email.com',
      address: 'address',
    }

    const emitSpy = spyOn(component.state, 'emit')

    component.newContactForm.patchValue({
      firstName: 'Name',
      lastName: 'Last name',
      phone: '123',
      email: 'email@email.com',
      address: 'address',
    })
    component.submit()

    expect(emitSpy).toHaveBeenCalledWith({ newContact, close: true })
  })

  it('should not emit the newContact object when the form is invalid', () => {
    component.newContactForm.patchValue({
      firstName: '', // Empty field
      lastName: 'Last name', // Valid
      phone: '123', // Valid
      email: 'invalid-email', // Invalid email format
      address: 'address', // Valid
    })

    const emitSpy = spyOn(component.state, 'emit')

    component.submit()

    // Expect that the emit method was not called
    expect(emitSpy).not.toHaveBeenCalled()
  })

  it('should emit the state object with close property when close() is called', () => {
    const emitSpy = spyOn(component.state, 'emit')

    component.close()

    expect(emitSpy).toHaveBeenCalledWith({ close: true })
  })
})
