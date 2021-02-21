import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Aos from 'aos';
import { Gallery, GalleryItem, ImageSize, ThumbnailsPosition, VideoItem, YoutubeItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';


@Component({
  selector: 'mtp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Medtelplus';
  // private _albums: any[] = [
  //   {
  //     srcUrl: 'https://www.youtube.com/watch?v=ukut6cPY78k',
  //     caption: 'PPE Shortage in effect, caused by the pandemic',
  //     previewUrl: 'assets/img/thumbnails/video-0.jpg'
  //   },
  // ];
  // items: GalleryItem[] = this._albums.map(item => new YoutubeItem({ src: 'https://www.youtube.com/watch?v=ukut6cPY78k', autoplay: true}));
  galleryId = 'home';
  countUpOptions = {
    startVal: 0,
    duration: 3,
  }
  constructor(private gallery: Gallery, private lightbox: Lightbox) {}

  openLightbox(index = 0) {
    this.lightbox.open(index, this.galleryId, {panelClass: ''});
  }

  SERVICES = [
    {
      title: 'Telemedicine',
      icon: 'heart-beat',
      description: 'Medical check via video chat. Find peace of mind with a real doctor 24/7.'
    },
    {
      title: 'PPE Supply Solutions',
      icon: 'vehicle-crane',
      description: 'Our experienced team uses our supplier network to find the perfect fit for your transaction.'
    },
    {
      title: 'COVID-19 Vaccination',
      icon: 'dna-alt-2',
      description: 'Facilitation and consultation focused on vaccination purchase and deployment, for authorized medical and healthcare end buyers.'
    },
    {
      title: 'Medical Equipment',
      icon: 'heartbeat',
      description: 'Advancements in medical technology often make most medical equipment obselete. We help our customers find cutting edge medical technology.'
    },
    {
      title: 'Accessibility',
      icon: 'disabled',
      description: 'Our experienced team uses our supplier network to find the perfect fit for your transaction.'
    },
    {
      title: 'Research and Developement',
      icon: 'autism',
      description: '"The next best thing" is something we are always on the look-out. Healthcare and Medical studies, with a focus on technology.'
    },
  ]

  ngOnInit() {
    Aos.init({
      useClassNames: true,
      initClassName: 'false',
      animatedClassName: 'animated',
    });
    const galleryRef = this.gallery.ref('home', {
      autoPlay: true,
      disableThumb: true,
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
      // itemTemplate: this.itemTemplate,
      gestures: false
    });

    galleryRef.addYoutube({ src: 'ukut6cPY78k'});
  }
}
