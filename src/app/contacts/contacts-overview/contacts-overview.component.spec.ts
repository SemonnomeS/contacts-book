import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ContactDetailComponent } from '../contact-detail/contact-detail.component'

import { ContactsOverviewComponent } from './contacts-overview.component'

describe('ContactsOverviewComponent', () => {
  let component: ContactsOverviewComponent
  let fixture: ComponentFixture<ContactsOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsOverviewComponent, ContactDetailComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ContactsOverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
