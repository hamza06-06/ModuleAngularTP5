import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  objectifs: string[] = [];
  
removeItem(index: number): void {
  if (index >= 0 && index < this.objectifs.length) {
    this.objectifs.splice(index, 1);
  }
}


updateItem(index: number, nouveauTitre: string): void {
  if (index >= 0 && index < this.objectifs.length && nouveauTitre.trim() !== '') {
    this.objectifs[index] = nouveauTitre.trim();
  }
}


}