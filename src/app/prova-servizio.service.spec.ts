import { TestBed } from '@angular/core/testing';

import { ProvaServizioService } from './prova-servizio.service';

describe('ProvaServizioService', () => {
  let service: ProvaServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvaServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
