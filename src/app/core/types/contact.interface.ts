export interface Contact {
  id: number | null
  firstName: string
  lastName: string
  phone: string
  email: string
  address: string
}

export interface ContactsState {
  isLoading: boolean
  contacts: Contact[]
  error: string | null
}
