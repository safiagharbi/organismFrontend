import { Component} from '@angular/core';
import { OrganismService } from '../services/organism.service';
import { CommonModule } from '@angular/common';
import { Organism } from '../models/organism.model';
import { MatCardModule } from '@angular/material/card';
import { SplitPipe } from '../split.pipe';

@Component({
  selector: 'app-organism',
  standalone: true,
  templateUrl: './organism.component.html',
  styleUrl: './organism.component.css',
  imports: [CommonModule, MatCardModule, SplitPipe],
  providers: [OrganismService] // Fournir HttpClient à ce composant
})
export class OrganismComponent {
  organisms: Organism[] = [];

  constructor(private organismService: OrganismService) {}

  ngOnInit() {
    this.organismService.getData().subscribe(response => {
      this.organisms = response;
    });
  }

}
