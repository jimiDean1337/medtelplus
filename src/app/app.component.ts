import { Component, OnInit, TemplateRef } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'mtp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Medtelplus';
  constructor() {}


  ngOnInit() {
    Aos.init({
      useClassNames: true,
      initClassName: 'false',
      animatedClassName: 'animated',
    });
  }

}
