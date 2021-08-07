import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {  Downloader,  DownloadRequest,  NotificationVisibility,} from '@ionic-native/downloader/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  glowEffect = false;
  @ViewChild('caseBtn', { read: ElementRef }) caseBtn: ElementRef;

  constructor(
    private downloader: Downloader,
    private transfer: FileTransfer,
    private file: File,
    private platform: Platform,
    private afStrage: AngularFireStorage
  ) {}

  ngOnInit() {}

  hoverEffect(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.caseBtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundry = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (
      xTouch < leftBoundry ||
      xTouch > rightBoundary ||
      yTouch < topBoundary
    ) {
      this.glowEffect = false;
    }
  }

  openLinkedin(url: string) {
    window.open(url, '_system', 'location=yes');
  }

  openGitHub(url: string) {
    window.open(url, '_system', 'location=yes');
  }

  openBehnace(url: string) {
    window.open(url, '_system', 'location=yes');
  }

  openResume(url: string) {
    window.open(url, '_system', 'location=yes');
  }
  
  async downloadResume() {

    try{  
    await this.platform.ready();
    await this.afStrage.storage.ref('Serge_Badio_Jr_Resume.pdf')     
    .getDownloadURL()
    .then((docUrl) => {  
      
      let path = null;
      if(this.platform.is('cordova')){

        if(this.platform.is('ios')) {
          path = this.file.documentsDirectory;
        } else if (this.platform.is('android')) {
          path = this.file.dataDirectory;
        } else {
  
        }
  
        let request: DownloadRequest = {
          uri: docUrl,
          title: 'Serge Badio Jr Resume',
          description: 'PDF Resume',
          mimeType: 'application/pdf',
          visibleInDownloadsUi: true,
          notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,        
          destinationInExternalFilesDir: {
            dirType: path,
            subPath: 'Serge_Badio_Jr_Resume.pdf'
          }
        };
  
        this.downloader.download(request)
          .then((location: string) =>{
            console.log('File downloaded at:' + location)
          })
          .catch((error: any) => console.error("Download error", error));
  
          const fileTransfer: FileTransferObject = this.transfer.create();
        
          const url = docUrl;
        fileTransfer.download(url, path + 'Serge_Badio_Jr_Resume.pdf')
        .then((entry) => {
          console.log('download complete: ' + entry.toURL());
        }, (error) => {
          console.error("Download error", error)
        });
      } else {
        const url = docUrl;
        this. openResume(url);
      }
    }).catch(err => console.log("Error getting file", err));
    } catch (err) {
      console.log("Error downloading file occured", err)
    }
  }
}
