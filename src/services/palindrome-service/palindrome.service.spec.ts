import { TestBed } from '@angular/core/testing';

import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
  let service: PalindromeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalindromeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
