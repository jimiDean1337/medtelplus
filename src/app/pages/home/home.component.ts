import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxConfig } from 'ng-gallery/lightbox';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/core/services/data.service';
import { ConsultationData } from 'src/app/interfaces/consultation.interface';
import { COUNTER, FAQ, GALLERYITEMS, PRODUCTS, SERVICES, TEAM } from 'src/app/shared/global.model';
@Component({
  selector: 'mtp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('freeConsultationTemplate', { static: true }) freeConsultationTemplate: TemplateRef<any>;
  title = 'Medtelplus';
  modalRef: BsModalRef;
  loaders = {
    page: false,
    consultation: false,
    contact: false,
  }
  galleryId = 'home';
  showMobileNav: boolean = false;

  navLinks = [
    { name: 'About', link: 'about' },
    { name: 'Service', link: 'services' },
    { name: 'Consultation', link: 'consultation' },
    { name: 'Products', link: 'products' },
    { name: 'Team', link: 'team' },
    { name: 'FAQ', link: 'faq' },
    { name: 'Gallery', link: 'gallery' },
    { name: 'Contact', link: 'contact' },
  ]
  countUpOptions = {
    startVal: 0,
    duration: 3,
  }
  selectedTab = 0;
  selectedFaq = 0;
  products = PRODUCTS;
  services = SERVICES;
  counter = COUNTER;
  team = TEAM;
  faq = FAQ;

  galleryItems = GALLERYITEMS;
  contactModel: any = {};
  consultation: ConsultationData = {};

  testimonyCarouselOptions: OwlOptions;

  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(private router: Router, private route: ActivatedRoute,  private gallery: Gallery, private lightbox: Lightbox, private dataService: DataService, private modalService: BsModalService) { }

  addConsultation(form: NgForm, data: any) {
    console.log("addConsultation ~ data", form, data);
    data.verificationId = Math.floor(Math.random() * Date.now());
    data.verified = false;
    this.loaders.consultation = true;
    this.dataService.addConsultation(data).then(res => {
      this.loaders.consultation = false;
      form.reset();
    });
    // TODO: Remove available blocks that are past current time
    // TODO: Check if consultation already exists under user email
  }

  addContact(form: NgForm, data: any) {
    console.log("addContact ~ data", data);
    this.loaders.contact = true;
    this.dataService.addContact(data).then(res => {
      this.loaders.consultation = false;
      form.reset();
    });
  }

  addSubscriber(data: { email: string }) {
    this.dataService.addSubscriber(data);
  }

  formatDate(date) {
    this.consultation.date = null;
    setTimeout(() => {
      if (date) {
        console.log('date to format',date)
        this.consultation.date = `${date.getMonth() + 1}/${date.getDate()}`
      }
    }, 500)
  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  openLightbox(index = 0, lightboxConfig?: LightboxConfig) {
    this.lightbox.open(index, this.galleryId, { ...lightboxConfig });
  }

  openSchedulerModal(content: TemplateRef<any>, data?: any) {
    this.modalRef = this.modalService.show(content, {
      id: 0,
      class: 'modal-xl consultation-modal',
    });
  }

  openOnLoadModal(content) {
    this.modalRef = this.modalService.show(content, {
      class: 'onload-consultation-modal',
      id: 1,
    })
  }

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }

  // private runConsultationChecks(date, time, email) {

  // }


  ngOnInit() {
    setTimeout(() => {
      this.openOnLoadModal(this.freeConsultationTemplate);
    }, 5000)
    const galleryRef = this.gallery.ref('home', {
      autoPlay: true,
      loadingStrategy: 'lazy',
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
      // itemTemplate: this.itemTemplate,
      gestures: true
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
    });
    // this.testimonyCarouselOptions = {
    //   loop: true,
    //   mouseDrag: false,
    //   touchDrag: false,
    //   pullDrag: false,
    //   dots: false,
    //   navSpeed: 700,
    //   navText: ['', ''],
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     400: {
    //       items: 2
    //     },
    //     740: {
    //       items: 3
    //     },
    //     940: {
    //       items: 4
    //     }
    //   },
    //   nav: true
    // }

    galleryRef.addYoutube({ src: 'ukut6cPY78k' });

  }

  selectTab(idx: number) {
    this.selectedTab = idx;
  }

  toggleFaq(idx: number) {
    this.selectedFaq = idx;
  }

}
