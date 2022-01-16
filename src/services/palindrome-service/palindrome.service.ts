import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

	constructor() {}
	
	isPalindrome(mot: string | null): boolean {		
		let motTableauCaractere: string[] = [];
		let motNombreCaractere: number = 0;
		
		if(mot === null) {
			return false;
		}
		
		motNombreCaractere = mot.length;
		
		if(motNombreCaractere === 0) {
			return false;
		}
		
		motTableauCaractere = Array.from(mot);
		
		for(let i=0; i<motNombreCaractere/2; i++) {
			if(motTableauCaractere[i] !== motTableauCaractere[motNombreCaractere - 1 - i]) {
				return false;
			}
		}
		
		return true;
	}
}
