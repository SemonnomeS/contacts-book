import { createAction, props } from '@ngrx/store'
import { Contact } from '../../types/contact.interface'

export const getContacts = createAction('[Contacts] Get Contacts')
export const getContactsSuccess = createAction('[Contacts] Get Contacts success', props<{ contacts: Contact[] }>())
export const getContactsFailure = createAction('[Contacts] Get Contacts failure', props<{ error: string }>())

export const addContact = createAction('[Contacts] Add Contact', props<{ contact: Contact }>())
export const addContactSuccess = createAction('[Contacts] Add Contact success', props<{ contact: Contact }>())
export const addContactFailure = createAction('[Contacts] Add Contact failure', props<{ error: string }>())
