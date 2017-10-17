import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {OrderByPipe} from './order-by.pipe';
import {SearchPipe} from './search-pipe';

@NgModule({
    imports: [],
    declarations: [
        OrderByPipe,
        SearchPipe
    ],
    exports: [
        OrderByPipe,
        SearchPipe
    ]
})
export class SharedModule { }
//declarations can be used within the module
//exports are given to modules that import this module.