import { TestBed } from '@angular/core/testing';
import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Tabulation test x = 1, y = 0.5', () => {
    let x = 1;
    let y = 0.5;
    let result = service.getTab(x, x, 1);
    expect(result.x[0]).toBe(x.toFixed(4));
    expect(result.y[0]).toBe(y.toFixed(4));
  });

  fit('Tabulation test x =[1, 2, 3], y = [0.5, 0.2, 0.1]', () => {
    let xx = [1, 2, 3]; 
    let yy = [0.5000, 0.2000, 0.1000];
    let h = 1;
    let result = service.getTab(xx[0], xx[2], h);

    for (let i = 0; i < xx.length; i++) {
      expect(result.x[i]).toBe(xx[i].toFixed(4));
      expect(result.y[i]).toBe(yy[i].toFixed(4));
    }
  });

});
