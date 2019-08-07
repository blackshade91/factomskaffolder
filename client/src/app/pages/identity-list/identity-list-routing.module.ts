import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentityListComponent } from './identity-list.component';

const routes: Routes = [
  {
    path: '',
    component: IdentityListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityListRoutingModule { }
