import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetail } from './contact-detail/contact-detail.component';
import { ContactList} from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetail,
    ContactList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
