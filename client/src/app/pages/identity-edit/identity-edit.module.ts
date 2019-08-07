import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityEditComponent } from './identity-edit.component';
import { IdentityEditRoutingModule } from './identity-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    IdentityEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IdentityEditComponent
  ]
})
export class IdentityEditModule { }
