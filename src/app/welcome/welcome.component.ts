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
  constructor(private cs: ProvaServizioService) {}

  ngOnInit(): void {}
  verifica() {
    if (this.login === 'pippo' && this.password === '1234') {
      this.statoLogin = 'Loggato con successo';
    } else {
      this.statoLogin = 'Errore di autenticazione';
    }
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
