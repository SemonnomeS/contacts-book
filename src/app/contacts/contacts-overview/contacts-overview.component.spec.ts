import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Store, StoreModule } from '@ngrx/store'
import { Contact } from 'src/app/core/types/contact.interface'
import { ContactDetailComponent } from '../contact-detail/contact-detail.component'

import { ContactsOverviewComponent } from './contacts-overview.component'

describe('ContactsOverviewComponent', () => {
  let component: ContactsOverviewComponent
  let fixture: ComponentFixture<ContactsOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsOverviewComponent, ContactDetailComponent],
      imports: [StoreModule.forRoot({})],
    }).compileComponents()

    fixture = TestBed.createComponent(ContactsOverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should open contact detail', () => {
    const mockContact: Contact = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      phone: '123',
      email: 'email@email.com',
      address: 'address',
    }

    component.openContactDetail(mockContact)

    expect(component.selectedContact).toEqual(mockContact)
  })
})
