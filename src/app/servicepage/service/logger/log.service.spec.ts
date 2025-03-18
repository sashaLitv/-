import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should log message to console',() =>{
    const consoleSpy = spyOn(console, 'log');
    const fakeMessage = "x = 0.1, f(0.1) = 0.9901"

    service.write(fakeMessage);
    expect(consoleSpy).toHaveBeenCalledWith(fakeMessage);
  });
});
