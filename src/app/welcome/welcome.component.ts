import { Component, OnInit } from '@angular/core';
import { ProvaServizioService } from '../prova-servizio.service';
import { Clienti } from '../model/ProvaModel';
import { NuovoServizioService } from '../service/nuovo-servizio.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  clienteNuovo!: Clienti;
  statoLogin = '';
  login = '';
  password = '';
  idCliente = 3;
  clienteM!: Clienti;
  clientiM!: Clienti[];
  constructor(
    private cs: ProvaServizioService,
    private ns: NuovoServizioService
  ) {}

  ngOnInit(): void {
    this.cs.lista().subscribe((data) => {
      this.clientiM = data;
    });
  }

  nuovo() {
    this.ns.provalo().subscribe((data) => {
      this.clienteNuovo = data;
    });
  }

  verifica() {
    if (this.login === 'pippo' && this.password === '1234') {
      this.statoLogin = 'Loggato con successo';
    } else {
      this.statoLogin = 'Errore di autenticazione';
    }
  }
  provaServizioNuovo() {}
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
