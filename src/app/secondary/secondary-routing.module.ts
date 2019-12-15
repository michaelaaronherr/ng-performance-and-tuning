import { Routes, RouterModule } from '@angular/router';
import { SecondaryComponent } from './secondary.component';
const routes: Routes = [
  {
    path: '**',
    component: SecondaryComponent,
  },
];

export const SecondaryRoutes = RouterModule.forChild(routes);
