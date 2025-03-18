import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
@Injectable({
  providedIn: 'root'
})
export class TabService {
  private xx: string[] = [];
  private yy: string[] = [];

  constructor(@Optional() private logService: LogService) { }

  getTab(startX: number, endX: number, h: number){
    this.xx = [];
    this.yy = [];
    let x = startX;

    while(x <= endX){
      let y = 1/(x*x + 1);
      this.yy.push(y.toFixed(4));
      this.xx.push(x.toFixed(4));

      if (this.logService) {
        this.logService.write(`f(${x.toFixed(4)}) = ${y.toFixed(4)}`);  
      }
      x += h;
    }
    return {x: this.xx, y: this.yy};
  }
}
