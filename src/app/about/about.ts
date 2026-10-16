import { Component } from '@angular/core';
import { ActiviteService } from '../services/activite';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  name: string = "Kylian Mbappé";
  constructor(public activiteService: ActiviteService) {}
}
