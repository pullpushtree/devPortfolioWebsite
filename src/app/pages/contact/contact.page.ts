import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
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
    public afDb: AngularFireDatabase,
    public afs: AngularFirestore,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    let msgPayload = {
      name: this.fname,
      email: this.emailAddress,
      body: this.body,
      isHtml: false,
    };

    console.log('msgPayload value ', msgPayload);

    this.afs
      .collection('messages')
      .add(msgPayload)
      .then((res) => {
        this.messageSuccess();
      })
      .catch((err) => {
        this.messageFailed();
      });
  }

  async messageSuccess(){
    await this.toastCtrl.create({
      message: "Thank You!, Your message has been sent",
      duration: 3000,
      position: 'bottom',
      color: 'warning'

    }).then(res => res.present());
  }

  async messageFailed(){
    await this.toastCtrl.create({
      message: "Something went wrong. Please try Again!",
      duration: 3000,
      position: 'bottom',
      color: 'danger'

    }).then(res => res.present());
  }

}
