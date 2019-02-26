import { PipeTransform, Pipe } from '@angular/core';

// https://stackoverflow.com/questions/48628263/angular-2-4-5-display-dates-with-suffix-st-rd-and-th-in-expression
@Pipe({ name: 'ordinal' })
export class OrdinalPipe implements PipeTransform {
    transform(value: string): string {

    let suffix = 'th',
        day = value;

        if (day === '1' || day === '21' || day === '31') {
            suffix = 'st'
        } else if (day === '2' || day === '22') {
            suffix = 'nd';
        } else if (day === '3' || day === '23') {
           suffix = 'rd';
        }

        return day + suffix;

    }
}