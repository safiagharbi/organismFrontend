import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organism } from '../models/organism.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganismService {

  private apiUrl = 'http://localhost:8080/organisms';

  constructor(private http: HttpClient) { }

  getData(): Observable<Organism[]> {
    return this.http.get<Organism[]>(this.apiUrl).pipe(
      map((data: any[]) =>
        data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          role: item.role,
          target: item.target,
          priorities: item.priorities
        }))
      )
    );
  }
}
