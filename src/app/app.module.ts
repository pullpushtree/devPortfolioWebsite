import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Downloader } from '@ionic-native/downloader/ngx';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from '@ionic-native/file-transfer/ngx';


export const firebaseConfig = environment.firebaseConfig;
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth    
    AngularFireStorageModule, // Storage
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Downloader,
    File,
    FileTransfer
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
