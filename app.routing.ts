import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MissionDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
