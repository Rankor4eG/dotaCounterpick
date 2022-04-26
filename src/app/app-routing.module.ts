import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: 'counterpick',
    loadChildren: () => import('./pages/counterpick/counterpick.module').then(m => m.CounterpickModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
