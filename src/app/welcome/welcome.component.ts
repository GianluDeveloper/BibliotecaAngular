import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  statoLogin = '';
  login = '';
  password = '';
  constructor() {}

  ngOnInit(): void {}
  verifica() {
    if (this.login === 'pippo' && this.password === '1234') {
      this.statoLogin = 'Loggato con successo';
    } else {
      this.statoLogin = 'Errore di autenticazione';
    }
  }
}
