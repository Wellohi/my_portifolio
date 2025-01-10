import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Wellington Barros - Contato');
  }
}
