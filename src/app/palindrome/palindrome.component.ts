import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PalindromeService } from 'src/services/palindrome-service/palindrome.service';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {
	message: string | undefined;

	constructor(private palindromeService: PalindromeService, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.getMessage();
  	}

	getMessage(): void {
		const mot = this.route.snapshot.paramMap.get('mot');
		if(this.palindromeService.isPalindrome(mot)) {
			this.message = "OK";
		} else {
			this.message = "KO";
		}
	}
}
