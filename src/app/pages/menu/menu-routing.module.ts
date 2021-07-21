import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [        
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'work',
        loadChildren: () => import('../work/work.module').then( m => m.WorkPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'work-kc',
        loadChildren: () => import('../work-kc/work-kc.module').then( m => m.WorkKcPageModule)
      },
      {
        path: 'work-ae',
        loadChildren: () => import('../work-ae/work-ae.module').then( m => m.WorkAePageModule)
      },
      {
        path: 'work-ie',
        loadChildren: () => import('../work-ie/work-ie.module').then( m => m.WorkIePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
