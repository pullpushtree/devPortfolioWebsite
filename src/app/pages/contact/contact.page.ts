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
  submitted: boolean;

  constructor(
    public afDb: AngularFireDatabase,
    public afs: AngularFirestore,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  onSubmit(val: any ) {
    this.submitted = true;
    const date: Date = new Date();
    const date2: number = Date.now();
    const msgPayload = {
      subject: val.subject,
      name: val.fname,
      email: val.emailAddress,
      body: val.body,
      date,
      date2,
    };


    this.afs
      .collection('messages')
      .add(msgPayload)
      .then((res) => {
        this.messageSuccess();
      })
      .catch((err) => {
        this.messageFailed();
        console.log('ERROR => ', err);
      });
  }

  async messageSuccess(){
    await this.toastCtrl.create({
      message: 'Thank You!, Your message has been sent',
      duration: 5000,
      position: 'bottom',
      color: 'warning'

    }).then(res => res.present());
  }

  async messageFailed(){
    await this.toastCtrl.create({
      message: 'Something went wrong. Please try Again!',
      duration: 5000,
      position: 'bottom',
      color: 'danger'

    }).then(res => res.present());
  }

}
