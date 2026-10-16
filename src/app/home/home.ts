import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite';

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  nbItems: number = 4;
  btnText: string = "Envoyer";
  objectifText: string = "";
  get objectifs(): string[] {
    return this.activiteService.objectifs;
  }

  
  ouvrirActivite(index: number) {
    this.monRouteur.navigate(['/consultAct', index]);
  }


  constructor(private monRouteur: Router,
    private activiteService: ActiviteService
  ) {}

  ajoutItem() {
    this.objectifs.push(this.objectifText);
    this.nbItems++;
    this.monRouteur.navigate(['/about']);
  }

  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
}
