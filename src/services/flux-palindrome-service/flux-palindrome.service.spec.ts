import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { asyncData, asyncError } from 'src/helpers/async-helpers';
import { Word } from 'src/interfaces/word';
import { FluxPalindromeService } from './flux-palindrome.service';

describe('FluxPalindromeService', () => {
	let service: FluxPalindromeService;
	let httpClientSpy: jasmine.SpyObj<HttpClient>;

	beforeEach(() => {
		const httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
		TestBed.configureTestingModule({
			// Provide both the service-to-test and its (spy) dependency
			providers: [
				FluxPalindromeService,
				{ provide: HttpClient, useValue: httpClientSpyObj }
			]
		});
		// Inject both the service-to-test and its (spy) dependency
		service = TestBed.inject(FluxPalindromeService);
		httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
	});

	it('should return expected words (HttpClient called once)', (done: DoneFn) => {
		const expectedWords: Word[] = [
			{ id: 1, label: 'ATA', isPalindrome: true }, 
			{ id: 2, label: 'BOO', isPalindrome: false }
		];

		httpClientSpy.get.and.returnValue(asyncData(expectedWords));

		service.getWords().subscribe(
			words => {
				expect(words).toEqual(expectedWords, 'expected words');
				done();
			},
			done.fail
		);
		expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
	});

	it('should return an empty words when the server returns a 404', (done: DoneFn) => {
		const errorResponse = new HttpErrorResponse({
			error: 'test 404 error',
			status: 404, 
			statusText: 'Not Found'
		});

		const expectedWords: Word[] = [];

		httpClientSpy.get.and.returnValue(asyncError(errorResponse));

		service.getWords().subscribe(
			words => {
				expect(words).toEqual(expectedWords, 'expected words');
				done();
			},
			done.fail
		);
		expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
	});
});
