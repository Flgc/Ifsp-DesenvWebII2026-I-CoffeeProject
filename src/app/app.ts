import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projeto');
  disciplina = "Desenvolvimento para internet II";
  docente = "Profa. Adriana Belon "  
  nome = 'Fábio Luís';  
}
