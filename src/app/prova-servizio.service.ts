import { Injectable } from '@angular/core';
import { Clienti } from './model/ProvaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/JavaBiblioteca/rest/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ProvaServizioService {
  constructor(private http: HttpClient) {}
  lista(): Observable<Clienti[]> {
    return this.http.get<Clienti[]>(`${baseUrl}/findAll`);
  }
  ritorna(idCliente: number): Observable<Clienti> {
    return this.http.get<Clienti>(`${baseUrl}/findById/${idCliente}`);
  }
  // inserisci(c: ClientiInsert) {
  //   return this.http.post(`${baseUrl}/Inserisci`, c);
  // }
  cancella(idCliente: number) {
    const cliente = {} as Clienti;
    cliente.idCliente = idCliente;
    return this.http.delete(`${baseUrl}/delete?id=${idCliente}`, {
      headers: {
        'content-Type': 'application/json',
      },
    });
  }
  modifica(c: Clienti) {
    return this.http.put(`${baseUrl}/Modifica`, c);
  }
}
