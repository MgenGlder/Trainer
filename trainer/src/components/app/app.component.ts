import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
@Component({
    selector: 'trainer-app',
    template: `<div class="navbar navbar-default navbar-fixed-top top-navbar">
                <div class="container app-container">
                  <header></header>
                </div>
              </div>
              <div class="container body-content app-container">
                <router-outlet></router-outlet>
              </div>`
})
export class TrainerAppComponent {
    //The modal dialog needs a container componenet to host itself. By passing
    //in the ViewContainerRef, we allow the dialog to load inside the app root.
    constructor(overlay: Overlay, viewContainer: ViewContainerRef) {
      overlay.defaultViewContainer = viewContainer;
    }
}
