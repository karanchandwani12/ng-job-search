import { TestBed } from '@angular/core/testing';

import { SjobServService } from './sjob-serv.service';

describe('SjobServService', () => {
  let service: SjobServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SjobServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
