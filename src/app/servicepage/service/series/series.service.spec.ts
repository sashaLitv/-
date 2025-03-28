import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';


describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Taylor Series test x = 0.8, y=0.6098', () => {
    let x = 0.8;
    let y = 0.6098;
    let result = service.getSeries(x);
    expect(result).toBeCloseTo(y, 4);
  });

  fit('Taylor Series test x = [0.7, 0.75, 0.8], y=[0.6711, 0.64, 0.6098]', () => {
    let xx = [0.7, 0.75, 0.8];
    let yy = [0.6711, 0.64, 0.6098];
    
    for (let i = 0; i < xx.length; i++) {
        let result = service.getSeries(xx[i]);
        expect(result).toBeCloseTo(yy[i], 4);
    }
  });
});
