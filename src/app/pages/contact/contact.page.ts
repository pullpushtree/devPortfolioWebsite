import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  emailAddress: string;
  fname: string;  
  body: string;
  submitted: boolean;

  constructor(
  ) {}

  onSubmit() {
    const message = `My name is ${this.fname} 
      and email is ${this.emailAddress}
      and this is my message ${this.body}
      `;
    alert(message);

    this.submitted = true;
    let msgPayload = {
      name: this.fname,
      email: this.emailAddress,
      isHtml: false,      
      body: this.body
    };

    console.log('msgPayload value ', msgPayload);

  }

  ngOnInit() {}
}
