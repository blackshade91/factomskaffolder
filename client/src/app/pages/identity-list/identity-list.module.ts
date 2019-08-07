import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityListComponent } from './identity-list.component';
import { IdentityListRoutingModule } from './identity-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    IdentityListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IdentityListComponent
  ]
})
export class IdentityListModule { }
