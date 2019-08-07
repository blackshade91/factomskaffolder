import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentityEditComponent } from './identity-edit.component';

const routes: Routes = [
  {
    path: '',
    component: IdentityEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityEditRoutingModule { }
