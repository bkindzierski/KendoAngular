import { TestBed } from '@angular/core/testing';

import { Storedata } from './storedata';

describe('Storedata', () => {
  let service: Storedata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storedata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
