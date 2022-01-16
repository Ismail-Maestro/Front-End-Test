import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Word } from 'src/interfaces/word';

@Injectable({
  providedIn: 'root'
})
export class FluxPalindromeService {
	
	private FLUX_PALINDROME_URL = 'https://www.linktogo.fr/assets/json/fluxpalindrome.json';

	constructor(private http: HttpClient) {
	}
	
	getWords(): Observable<Word[]> {
		return this.http.get<Word[]>(this.FLUX_PALINDROME_URL)
				.pipe(
      				catchError(this.handleError<Word[]>('getWords', []))
    			);
	}
	
	/**
 	* Handle Http operation that failed.
 	* Let the app continue.
 	* @param operation - name of the operation that failed
 	* @param result - optional value to return as the observable result
 	*/
	private handleError<T>(operation: string, result?: T) {
  		return (error: any): Observable<T> => {

    	// TODO: send the error to remote logging infrastructure    	
    	console.error(`${operation} failed: ${error.message}`);

    	// Let the app keep running by returning an empty result.
    	return of(result as T);
  		};
	}
}
