import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: true
})
export class TimeAgoPipe implements PipeTransform {
    intervals:any = {
    'year': 31536000,
    'month': 2592000,
    'week': 604800,
    'day': 86400,
    'hour': 3600,
    'minute': 60,
    'second': 1
};
  transform(value: Date, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) 
            return 'Just now';
        for (const dateInterval in this.intervals) {
            var counter = Math.floor(seconds / this.intervals[dateInterval]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + ' ' + dateInterval + ' ago'; 
                } else {
                    return counter + ' ' + dateInterval + 's ago'; 
                }
        }
    }
    return value;
}
}
