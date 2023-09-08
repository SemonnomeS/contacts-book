import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, switchMap } from 'rxjs'
import { ContactsService } from '../../services/contacts/contacts.service'
import * as ContactsActions from '../../store/contacts/actions'

@Injectable()
export class ContactsEffects {
  getContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.getContacts),
      mergeMap(() => {
        return this.contactsService.getContacts().pipe(
          map((contacts) => ContactsActions.getContactsSuccess({ contacts })),
          catchError((error) => of(ContactsActions.getContactsFailure({ error: error.message })))
        )
      })
    )
  )

  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.addContact),
      switchMap((action) =>
        this.contactsService.addContact(action.contact).pipe(
          map((newContact) => ContactsActions.addContactSuccess({ contact: newContact })),
          catchError((error) => of(ContactsActions.addContactFailure({ error: error.message })))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {}
}
