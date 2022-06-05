import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { User } from '../user'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Users: User[] | undefined;
  constructor(private contactService: ContactService){
    this.contactService.get_users().subscribe((data: User) => { 
      this.Users = JSON.parse(JSON.stringify(data))
    });
  }

  ngOnInit(): void {
  }

}
