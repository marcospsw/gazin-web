import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDesenvolvedorComponent } from './containers/pages/create-desenvolvedor/create-desenvolvedor.component';
import { DesenvolvedoresComponent } from './containers/pages/desenvolvedores/desenvolvedores.component';
import { LevelsComponent } from './containers/pages/levels/levels.component';
import { UpdateDesenvolvedorComponent } from './containers/pages/update-desenvolvedor/update-desenvolvedor.component';
import { UpdateLevelsComponent } from './containers/pages/update-level/update-level.component';

const routes: Routes = [
  { path: '', redirectTo: 'levels', pathMatch: 'full' },
  {
    path: 'levels',
    component: LevelsComponent,
  },
  {
    path: 'levels/:id',
    component: UpdateLevelsComponent,
  },
  {
    path: 'devs',
    component: DesenvolvedoresComponent,
  },
  {
    path: 'devs/create',
    component: CreateDesenvolvedorComponent,
  },
  {
    path: 'devs/update/:id',
    component: UpdateDesenvolvedorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
