import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [ 
    {
      title: 'Home', 
      icon: 'home', 
      path: '/'
    },
    {
      title: 'About', 
      icon: 'person-outline', 
      path: '/about'
    },
    {
      title: 'Work', 
      icon: 'briefcase', 
      path: '/work'
    },
    {
      title: 'Contact', 
      icon: 'at-outline', 
      path: '/contact'
    }
  ];
  title= 'Home';

  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }

  setTitle(title ){
    this.title = title;
  }

  toggleMenu(width){
    if(width > 768 ){
      this.menuCtrl.enable(false, 'myMenu'); 
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }
@HostListener('window:resize', ['$event'])
private onResize(event) {
  const newWidth = event.target.innerWidth;
  console.log("menu rezie value ", newWidth)
  this.toggleMenu(newWidth)

}


}
