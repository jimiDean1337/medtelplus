import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from 'src/app/core/services/data.service';
import { ConsultationData } from 'src/app/interfaces/consultation.interface';
import { COUNTER, PRODUCTS, SERVICES } from 'src/app/shared/global.model';

@Component({
  selector: 'mtp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Medtelplus';
  modalRef: BsModalRef;
  loaders = {
    page: false,
    consultation: false,
    contact: false,
  }
  galleryId = 'home';
  countUpOptions = {
    startVal: 0,
    duration: 3,
  }
  selectedTab = 0;
  products = PRODUCTS;
  services = SERVICES;
  counter = COUNTER;
  contactModel = {};
  consultation: ConsultationData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    block: null,
    time: '',
    service: '',
    method: '',
    message: '',
    verified: false,
    verificationId: null
  };

  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(private gallery: Gallery, private lightbox: Lightbox, private dataService: DataService, private modalService: BsModalService) { }

  openLightbox(index = 0) {
    this.lightbox.open(index, this.galleryId, { panelClass: '' });
  }

  openSchedulerModal(content: TemplateRef<any>, data?: any) {
    this.modalRef = this.modalService.show(content, {
      class: 'modal-xl consultation-modal'
    });
  }

  addConsultation(form: NgForm, data: any) {
    console.log("addConsultation ~ data", form, data);
    // data.date = `${data.date.getMonth() + 1}-${data.date.getDate()}`;
    data.verificationId = Math.floor(Math.random() * Date.now())
    this.dataService.addConsultation(data);
    this.consultation = {
      name: '',
      email: '',
      phone: '',
      date: '',
      block: null,
      time: '',
      service: '',
      method: '',
      message: '',
      verificationId: null,
      verified: false
    };
  }

  addContact(data: any) {
    console.log("addContact ~ data", data);
    this.dataService.addContact(data);
  }

  formatDate(date) {
    if (date) {
      console.log('date to format',date)
      this.consultation.date = `${date.getMonth() + 1}-${date.getDate()}`
    }
  }

  ngOnInit() {
    const galleryRef = this.gallery.ref('home', {
      autoPlay: true,
      disableThumb: true,
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
      // itemTemplate: this.itemTemplate,
      gestures: false
    });

    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'MM-DD',
      showClearButton: true,
      clearPosition: 'right',
      adaptivePosition: true,
      daysDisabled: [6, 0],
      showWeekNumbers: false,
      minDate: new Date()
    })

    galleryRef.addYoutube({ src: 'ukut6cPY78k' });

  }

  selectTab(idx: number) {
    this.selectedTab = idx;
  }

}
