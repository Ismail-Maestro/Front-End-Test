import { TestBed } from '@angular/core/testing';

import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
	let service: PalindromeService;

	beforeEach(() => {
		TestBed.configureTestingModule({providers: [PalindromeService]});
		service = TestBed.inject(PalindromeService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('#isPalindrome should return true for stats word', () => {
		expect(service.isPalindrome("stats")).toBe(true);
	});

	it('#isPalindrome should return false for spopo word', () => {
		expect(service.isPalindrome("spopo")).toBe(false);
	});
});
