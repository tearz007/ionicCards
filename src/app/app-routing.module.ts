import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './pages/menu/menu/menu.page';
import { SideMenuPage } from './pages/sideMenu/side-menu/side-menu.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'side-menu/menu/main',
    pathMatch: 'full'
  }, {
    path: 'side-menu/menu',
    redirectTo: 'side-menu/menu/main',
    pathMatch: 'full'
  },
  {
    path: 'side-menu',component:SideMenuPage,
    //loadChildren: () => import('./pages/sideMenu/side-menu/side-menu.module').then( m => m.SideMenuPageModule)
   
    children:[
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./pages/card/card/card.module').then( m => m.CardPageModule)
      },
      {
        path: 'menu',component:MenuPage,
        // loadChildren: () => import('./pages/menu/menu/menu.module').then( m => m.MenuPageModule)
        children:[
          {
            path: 'stater',
            loadChildren: () => import('./pages/menu/stater/stater.module').then( m => m.StaterPageModule)
          },
          {
            path: 'main',
            loadChildren: () => import('./pages/menu/main/main.module').then( m => m.MainPageModule)
          },
          {
            path: 'desert',
            loadChildren: () => import('./pages/menu/desert/desert.module').then( m => m.DesertPageModule)
          },

        ]
      },
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
