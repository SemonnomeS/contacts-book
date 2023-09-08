import { createSelector } from '@ngrx/store'
import { AppState } from 'src/app/types/appState.interface'

export const selectFeature = (state: AppState) => state.contacts

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading)

export const contactsSelector = createSelector(selectFeature, (state) => state.contacts)

export const errorSelector = createSelector(selectFeature, (state) => state.error)
