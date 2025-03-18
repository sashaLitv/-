import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  private yy: string[] = [];

  constructor(@Optional() private logService: LogService) { }

  getRecursion(x: number, n: number = 0, sum: number = 0, sign: number = 1): number {
    if (n >= 25)    return sum; 

    let term = sign * Math.pow(x, 2 * n);
    return this.getRecursion(x, n + 1, sum + term, -sign); 
  }

  getTab(startX: number, endX: number, h: number){
    this.yy = [];
    let x = startX;
    while(x <= endX){
      let y = this.getRecursion(x);
      this.yy.push(y.toFixed(4));

      if (this.logService) {
        this.logService.write(`f(${x.toFixed(4)}) = ${y.toFixed(4)}`);  
      }
      x += h;
    }
    return  this.yy;
  }
}
