import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ContactsOverviewComponent } from './contacts-overview/contacts-overview.component'

const routes: Routes = [
  {
    path: '',
    component: ContactsOverviewComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
