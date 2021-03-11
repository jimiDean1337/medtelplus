import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { VerificationComponent } from './pages/verification/verification.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedItemsComponent } from './pages/featured-items/featured-items.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    VerificationComponent,
    HomeComponent,
    FeaturedItemsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CountUpModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
