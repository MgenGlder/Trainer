import {Pipe} from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe {
    transform(value: Array<any>, field: string): any {
        //'field' is the first parameter passed to the pipe using the ':' delimiter
        if(value == null || value.length <= 1) {
            return value;
            //if the value array is empty, or has 1 or 0 elements, return it. It is already sorted.
        }
        if(field.startsWith("-")) {
            //if the first letter is a '-', it is tagged as descending order, so...
            field = field.substring(1);
            //detatch the '-' from the parameter string
            if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
                //if the typeof is string, or the instanceof is string- one of these should return true if it's actually a string
                return [...value].sort((a, b)=> b[field].localeCompare(a[field]));
                //localecompare actually returns string such that the entire array is in reverse, descending order.
                //should return 1, 0, or -1
            }
            //in the case that it isn't a string, we assume the field parameter is a number;
            //just do a normal compare for descending order of numbers;
            return [...value].sort((a, b) => b[field] - a[field]);
        }
        else {
            //in the case that the '-' is absent, the sort should return an array going in ascending order
            if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
                //if a string, on of the two above expressions should return true.
                return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
            }
            //if it's a number array, sort numbers accordingly.
            return [...value].sort((a, b) => a[field] - b[field]);
        }
    }
}