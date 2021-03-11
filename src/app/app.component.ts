import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import * as Aos from 'aos';
import { DataService } from './core/services/data.service';


@Component({
  selector: 'mtp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Medtelplus';
  loading: boolean = false;
  subscriber: any = {};
  constructor(private dataService: DataService) {
    // JQUERY Yeah, I know...  XD=]==<
    // Handles active links in .nav-menu when a section is in view-port / scrolled to
    $(function () {
      var nav_sections = $('section');
      var main_nav = $('.nav-menu, .mobile-nav');

      $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
          var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
              main_nav.find('li').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
          }
          if (cur_pos < 300) {
            $(".nav-menu ul:first li:first, .mobile-nav ul:first li:first").addClass('active');
          }
        });
      });
    });
  }
  addSubscriber(form: NgForm, data: { email: string }) {
    this.dataService.addSubscriber(data).then(res => {
    });
    form.reset();
  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  ngOnInit() {
    Aos.init({
      once: true,
      useClassNames: true,
      initClassName: 'false',
      animatedClassName: 'animated',
    });

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1250)

  }


}
