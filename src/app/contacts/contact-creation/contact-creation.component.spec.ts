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
})
