import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Wellington Barros - Sobre');
  }
}
