import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

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
    private emailComposer: EmailComposer,
    public formBuilder: FormBuilder
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

    this.emailComposer.open(msgPayload);
    console.log('msgPayload value ', msgPayload);

    //debugger;
  }

  ngOnInit() {}
}
