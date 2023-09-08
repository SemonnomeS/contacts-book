import { createReducer, on } from '@ngrx/store'
import { ContactsState } from '../../types/contact.interface'
import * as ContactsActions from './actions'

export const initalState: ContactsState = {
  isLoading: false,
  contacts: [],
  error: null,
}

export const reducers = createReducer(
  initalState,
  on(ContactsActions.getContacts, (state) => ({ ...state, isLoading: true })),
  on(ContactsActions.getContactsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    contacts: action.contacts,
  })),
  on(ContactsActions.getContactsFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
  on(ContactsActions.addContact, (state) => ({ ...state, isLoading: true })),
  on(ContactsActions.addContactSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    contacts: [...state.contacts, action.contact],
  })),
  on(ContactsActions.addContactFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
)
