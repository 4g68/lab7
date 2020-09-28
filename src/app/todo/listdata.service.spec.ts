import { TestBed } from '@angular/core/testing';

import { ListDataService } from './listdata.service';

describe('ListDataService', () => {
  let service: ListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
