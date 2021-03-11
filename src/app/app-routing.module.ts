import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { FeaturedComponent } from './shared/featured/featured.component';
import { HomeComponent } from './pages/home/home.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { FeaturedItemsComponent } from './pages/featured-items/featured-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'verify/:verificationId',
    component: VerificationComponent
  },
  {
    path: 'featured-items',
    component: FeaturedItemsComponent,
    children: [
      {
        path: ':product',
        component: FeaturedComponent
      }
    ]
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterLink]
})
export class AppRoutingModule { }
