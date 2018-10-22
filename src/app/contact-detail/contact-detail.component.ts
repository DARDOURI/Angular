import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetail implements OnInit {

  @Input() contact : Contact;
  
  constructor() { }

  ngOnInit() {
  }

}
