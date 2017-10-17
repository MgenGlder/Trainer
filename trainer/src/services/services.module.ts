import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LocalStorage } from './local-storage';
import { WorkoutHistoryTracker } from './workout-history-tracker';

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        LocalStorage,
        WorkoutHistoryTracker
    ],
})
export class ServicesModule {} 
//We register the localstorage class so it can be used.