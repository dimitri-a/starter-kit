import { TestBed, inject } from '@angular/core/testing';

import { MylistService } from './mylist.service';

describe('MylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MylistService]
    });
  });

  it('should be created', inject([MylistService], (service: MylistService) => {
    expect(service).toBeTruthy();
  }));
});
