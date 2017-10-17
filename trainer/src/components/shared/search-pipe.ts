import {Pipe} from '@angular/core';

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe {
    //simple searching pipe, get the array of objects, get the field (to search in) and the term that will be searched for, and filter the 
    //array based on that.
    transform(value: Array<any>, field: string, searchTerm: string): any {
        if (!field) return [];
        //if the field to search in isn't specified, don't worry about it.
        if (searchTerm == null) return [...value]; //use the spread operator to create a new array, so the same array reference is not returned
        //this triggers a change so angular knows the array is different. - change detection.
        //if the search term isn't specified, just return everything.
        return value.filter((item) => item[field] === searchTerm);
        //filter the array and get the for each item in the array, check to see if the associated field on that item matches
        //what we were given from the user's input.
    }
}