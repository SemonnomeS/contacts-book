import { TestBed } from '@angular/core/testing'
import { StoreModule } from '@ngrx/store'
import { NewContactService } from './new-contact.service'

describe('NewContactService', () => {
  let service: NewContactService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
    })
    service = TestBed.inject(NewContactService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
