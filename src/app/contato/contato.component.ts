import { Component,  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [MatIconModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

  email: string = 'wsaraivabarros@gmail.com';
  number: string = '(61) 99622-1898';

  showCopiedMessage: boolean = false; // Controla a exibição da mensagem


  constructor(
    private snackBar: MatSnackBar
  ) {}


  copy(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showCopiedMessage = true; // Exibe a mensagem
      setTimeout(() => {
        this.showCopiedMessage = false; // Oculta a mensagem após 3 segundos
      }, 2000);
    }).catch(err => {
      console.error('Erro ao copiar o texto:', err);
    });

   }
  }

