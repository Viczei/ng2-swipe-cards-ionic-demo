import { Component,  EventEmitter } from '@angular/core';

import {DomSanitizer} from "@angular/platform-browser";
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`
    .card-container {
  height:90vw;
  width:90vw;
}

.user_img {
  display: block;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
    `]
})
export class HomePage {
  ready = false;
  attendants = [];
  cardDirection = "xy";
  cardOverlay: any = {
      like: {
          backgroundColor: '#28e93b'
      },
      dislike: {
          backgroundColor: '#e92828'
      }
  };

  constructor(private sanitizer: DomSanitizer) {

      for (let i = 0; i < 50; i++) {
          this.attendants.push({
              id: i + 1,
              likeEvent: new EventEmitter(),
              destroyEvent: new EventEmitter(),
              asBg: sanitizer.bypassSecurityTrustStyle('url(http://placehold.it/500x500)')
          });
      }

      this.ready = true;
  }

  onCardInteract(event) {
    console.log(event);
  }

}
