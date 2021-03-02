import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  declarations: [SafeHtmlPipe, SchedulerComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    PopoverModule,
    AlertModule,
    ModalModule,
    BsDatepickerModule,
    TimepickerModule,
    SafeHtmlPipe,
    SchedulerComponent,
  ]
})
export class SharedModule { }
