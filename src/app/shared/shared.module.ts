import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { FeaturedComponent } from './featured/featured.component';
import { RouterModule } from '@angular/router';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [SafeHtmlPipe, SchedulerComponent, FeaturedComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    GalleryModule,
    LightboxModule,
    // CarouselModule,
  ],
  exports: [
    BsDropdownModule,
    PopoverModule,
    AlertModule,
    ModalModule,
    BsDatepickerModule,
    TimepickerModule,
    GalleryModule,
    LightboxModule,
    // CarouselModule,
    SafeHtmlPipe,
    SchedulerComponent,
    FeaturedComponent,
  ]
})
export class SharedModule { }
