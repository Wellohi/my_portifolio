import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-curriculo',
  imports: [],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.scss'
})
export class CurriculoComponent {
 constructor(private titleService: Title){
    this.titleService.setTitle('Wellington Barros - Currículo');
  }
}
