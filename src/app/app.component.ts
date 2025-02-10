import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrganismComponent } from './organism/organism.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OrganismComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organismFrontEnd';
}
