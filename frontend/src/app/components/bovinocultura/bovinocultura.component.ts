import { Component } from '@angular/core';

export interface Card {
  id: string;
  imagemUrl: string;
  nome: string;
  // a descrição foi quebrada em três linhas nos cards.. por isso os três campos para descrição
  desc1: string;
  desc2: string;
  desc3: string;
}

@Component({
  selector: 'app-bovinocultura',
  templateUrl: './bovinocultura.component.html',
  styleUrls: ['./bovinocultura.component.scss']
})
export class BovinoculturaComponent {

  cards: Card[] = [{
    id: '#',
    imagemUrl: './assets/porco.png',
    nome: 'Suinocultura',
    desc1: 'Dados referentes à',
    desc2: 'suinocultura do último',
    desc3 : 'trimestre'
  }, 
  {
    id: 'r1',
    imagemUrl: './assets/vaquinha.png',
    nome: 'Bovinocultura',
    desc1: 'Dados referentes à',
    desc2: 'bovinocultura do último',
    desc3 : 'trimestre'
  }, 
  {
    id: '#',
    imagemUrl: './assets/galinha.png',
    nome: 'Avinocultura',
    desc1: 'Dados referentes à',
    desc2: 'avicultura do último',
    desc3 : 'trimestre'
  }]

  constructor() {}

  ngOnInit(): void {
  }

}
