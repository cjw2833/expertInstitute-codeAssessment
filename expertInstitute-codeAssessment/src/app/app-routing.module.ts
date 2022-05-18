import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerPaths } from './core/constants/router-paths';

const routes: Routes = [
  {
    path: routerPaths.landing,
    loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: routerPaths.home,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
