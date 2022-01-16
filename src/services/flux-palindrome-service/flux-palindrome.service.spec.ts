import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from 'src/helpers/async-helpers';
import { Word } from 'src/interfaces/word';
import { FluxPalindromeService } from './flux-palindrome.service';

describe('FluxPalindromeService', () => {
  let service: FluxPalindromeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
  	httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  	service = new FluxPalindromeService(httpClientSpy);
  });

	it('should return expected words (HttpClient called once)', (done: DoneFn) => {
  		const expectedWords: Word[] =
    	[{ id: 1, label: 'ATA', isPalindrome: true }, { id: 2, label: 'BOO', isPalindrome: false }];

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
    		status: 404, statusText: 'Not Found'
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
