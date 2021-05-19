import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureComponent } from './voiture/voiture.component';
import { CamionComponent } from './camion/camion.component';

const routes: Routes = [
  { path:'camion', component: CamionComponent },
  { path:'voiture', component: VoitureComponent },
  { path: '', redirectTo: 'camion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
