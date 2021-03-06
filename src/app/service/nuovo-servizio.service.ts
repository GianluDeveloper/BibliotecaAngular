import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clienti } from '../model/ProvaModel';

@Injectable({
  providedIn: 'root',
})
export class NuovoServizioService {
  private baseUrl: string = 'http://localhost:8080/JavaBiblioteca/rest/Cliente';

  constructor(private hp: HttpClient) {}

  provalo() {
    return this.hp.get<Clienti>(`${this.baseUrl}/findById/3`);
  }
}
