import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtp-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.scss']
})
export class FeaturedItemsComponent implements OnInit {
  showMobileNav: boolean = false;

  constructor() { }

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }
  ngOnInit(): void {
  }

}
