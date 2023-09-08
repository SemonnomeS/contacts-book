import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ContactsOverviewComponent } from './contacts-overview/contacts-overview.component'
import { ContactsRoutingModule } from './contacts-routing.module'
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreationComponent } from './contact-creation/contact-creation.component'

@NgModule({
  declarations: [ContactsOverviewComponent, ContactDetailComponent, ContactCreationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ContactsRoutingModule],
})
export class ContactsModule {}
