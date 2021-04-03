import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {
  private suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
  private exp: any
  transform(value: any, args?: any): any {
    this.exp = Math.floor(Math.log(value) / Math.log(1000));
    if (Number.isNaN(value)) {
      return null;
    }

    if (value < 1000) {
      return value;
    } else {
      return (value / Math.pow(1000, this.exp)).toFixed(args + 1).slice(0, (args * -1)) + this.suffixes[this.exp - 1];

    }


  }

}
