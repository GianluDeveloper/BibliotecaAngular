import { TestBed } from '@angular/core/testing';

import { NuovoServizioService } from './nuovo-servizio.service';

describe('NuovoServizioService', () => {
  let service: NuovoServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuovoServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
