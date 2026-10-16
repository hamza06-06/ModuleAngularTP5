import { Component } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { ActiviteService } from '../services/activite';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  id: string = '';
  id2: string = '';
  titreActivite: string = '';
  editionEnCours: boolean = false;
  nouveauTitre: string = '';
  
retourAccueil(): void {
  this.router.navigate(['/']);
}


   constructor(private route: ActivatedRoute,
    private activiteService: ActiviteService,
    private router: Router
   ) {
     this.id = this.route.snapshot.params['id'];

     const index = Number(this.id);
     this.titreActivite =
      this.activiteService.objectifs[index] ?? 'Activité introuvable';
   }

 
modifierTitre(): void {
  this.nouveauTitre = this.titreActivite;
  this.editionEnCours = true;
}

enregistrerTitre(): void {
  const index = Number(this.id);

  if (Number.isInteger(index) &&
      index >= 0 &&
      index < this.activiteService.objectifs.length &&
      this.nouveauTitre.trim() !== '') {

    this.activiteService.updateItem(index, this.nouveauTitre);
    this.titreActivite = this.activiteService.objectifs[index];
    this.editionEnCours = false;
  }
}
  

 supprimeElem(): void {
  const index = Number(this.id);

  if (Number.isInteger(index) &&
      index >= 0 &&
      index < this.activiteService.objectifs.length) {
    this.activiteService.removeItem(index);
    this.router.navigate(['/']);
  }
}

 }
