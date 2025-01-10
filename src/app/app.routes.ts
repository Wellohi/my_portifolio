import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { CurriculoComponent } from './curriculo/curriculo.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'contato', component:ContatoComponent},
    {path:'curriculo', component:CurriculoComponent},
];
