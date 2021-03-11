import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Gallery, GalleryItem } from 'ng-gallery';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { FEATURED, FeaturedItem } from '../global.model';

@Component({
  selector: 'mtp-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  featuredItemsList$: Observable<FeaturedItem[]>;
  modalRef: BsModalRef;
  selectedItem: FeaturedItem;
  constructor(private dataService: DataService, public modal: BsModalService) { }

  openDetailsModal(content, selectedItem: FeaturedItem, modalOptions?: ModalOptions) {
    this.selectedItem = selectedItem;
    this.modalRef = this.modal.show(content, modalOptions);

  }

  ngOnInit(): void {
    this.featuredItemsList$ = of(FEATURED);

  }

}
