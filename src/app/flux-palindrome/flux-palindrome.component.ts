import { Component, OnInit } from '@angular/core';
import { Word } from 'src/interfaces/word';
import { FluxPalindromeService } from 'src/services/flux-palindrome-service/flux-palindrome.service';
import { PalindromeService } from 'src/services/palindrome-service/palindrome.service';

@Component({
  selector: 'app-flux-palindrome',
  templateUrl: './flux-palindrome.component.html',
  styleUrls: ['./flux-palindrome.component.css']
})
export class FluxPalindromeComponent implements OnInit {
	
	words: Word[] = [];

  	constructor(private fluxPalindromeService: FluxPalindromeService, private palindromeService: PalindromeService) {
	}

	ngOnInit(): void {
		this.getWords();
  	}

  	getWords(): void {
    	this.fluxPalindromeService.getWords()
    	.subscribe(words => {
				this.words = words
	    		for(let i=0; i<this.words.length; i++) {
					if(this.palindromeService.isPalindrome(this.words[i].label)) {
						this.words[i].isPalindrome = true;
					} else {
						this.words[i].isPalindrome = false;
					}
				}
		});
  	}
}
