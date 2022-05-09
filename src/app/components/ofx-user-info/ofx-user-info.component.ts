// ####### ANGULAR #######
import { Component, OnInit, Input } from '@angular/core';
// ####### PLUGINS #######
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'ofx-user-info',
  templateUrl: './ofx-user-info.component.html',
  styleUrls: ['./ofx-user-info.component.scss'],
})
export class OfxUserInfoComponent implements OnInit {
  @Input() type: string;
  @Input() value: string;

  constructor(
    private inAppBrowser: InAppBrowser,
  ) { }

  ngOnInit() { }

  openLink() {
    let link: string;

    switch (this.type) {
      case 'twitter':
        link = 'https://twitter.com/' + this.value;
        break;
      case 'blog':
        link = this.value;
        break;
      case 'email':
        link = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.value}&su=Hi`;
        break;
    }

    if (link !== undefined) {
      const browser = this.inAppBrowser.create(link);
      browser.show();
    }
  }

}
