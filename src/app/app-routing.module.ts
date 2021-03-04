import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroreComponent } from './errore/errore.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: ErroreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
