import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';
//Router and Event classes gotten from the router package. The event object is used in the subscribe function.
@Component({
    selector: 'header',
    template: `<div class="navbar-header">
                <h1>7 Minute Workout</h1>
               </div>
               <ul class="nav navbar-nav navbar-right">
                <li *ngIf="showHistoryLink"><a [routerLink]="['history']" title="Workout History">History</a></li>
               </ul>`
})
export class HeaderComponent {
    showHistoryLink: boolean = true;
    private subscription: any;
    constructor(private router: Router ) {
        //at the inception of the component subscribe to an event, only show the link if the route is not workout.
        this.router.events.subscribe((data: Event) => { //events.subscribe basically runs this code every time the route changes.
            this.showHistoryLink = !this.router.url.startsWith('/workout');
        });
    }
 }