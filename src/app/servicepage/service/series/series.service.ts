import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private yy: string[] = [];

  constructor(@Optional() private logService: LogService) { }
  getSeries(x: number): number {
    let sum = 0;
    let sign = 1;

    for (let n = 0; n < 25; n++) {
        let term = sign * Math.pow(x, 2 * n);  
        sum += term;  
        sign = -sign
    }
    return sum;
  }

  getTab(startX: number, endX: number, h: number){
    this.yy = [];
    let x = startX;
    while(x <= endX){
      let y = this.getSeries(x);
      this.yy.push(y.toFixed(4));

      if(this.logService){
        this.logService.write(`f(${x.toFixed(4)}) = ${y.toFixed(4)}`);  
      }
      x += h;
    }
    return  this.yy;
  }
}
