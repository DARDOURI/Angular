import { Component, OnInit } from '@angular/core';
import {ContactList} from './contact-list/contact-list.component';
import {ContactDetail} from './contact-detail/contact-detail.component';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'contacts';
  currentContact: Contact;

  constructor(){} 

  ngOnInit():void{ 
  }

  contactSelected(contact : Contact):void{
  this.currentContact = contact;
  }

}
