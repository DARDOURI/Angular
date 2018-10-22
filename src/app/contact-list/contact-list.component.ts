import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactList implements OnInit {

  constructor(){}

  contacts : Contact[];
  @Output() onSelect = new EventEmitter<Contact>();

  ngOnInit(): void{
    
    this.contacts =[{ id:1,    firstName:'Faly',    lastName:'Vonify',    phone : '123456789',mail:'faly.vonify@test.com'},   
      { id:2,    firstName:'Ando',    lastName:'Lalaina',    phone : '0102030405',mail:'ando.lalaina@test.com'},
      { id:3,    firstName:'Simplice',    lastName:'Michel',    phone :  '8884567898',mail:'simplice.michel@test.com'}
     ];
  }

  select(contact : Contact){
     this.onSelect.emit(contact);
  }
}
