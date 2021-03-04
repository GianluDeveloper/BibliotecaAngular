import { Component, OnInit } from '@angular/core';
import { ProvaServizioService } from '../prova-servizio.service';
import { Clienti } from '../model/ProvaModel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  statoLogin = '';
  login = '';
  password = '';
  idCliente = 3;
  clienteM!: Clienti;
  clientiM!: Clienti[];
  constructor(private cs: ProvaServizioService) {}

  ngOnInit(): void {
    this.cs.lista().subscribe((data) => {
      this.clientiM = data;
    });
  }

  verifica() {
    if (this.login === 'pippo' && this.password === '1234') {
      this.statoLogin = 'Loggato con successo';
    } else {
      this.statoLogin = 'Errore di autenticazione';
    }
  }
  elimina(): void {
    this.cs.cancella(25).subscribe((data) => {});
  }
  trovaCliente(): void {
    this.cs.ritorna(this.idCliente++).subscribe(
      (data) => {
        this.clienteM = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
