import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { MiABMRoutingModule } from './mi-abm-routing.module';
import { MiabmlistComponent } from './components/miabmlist/miabmlist.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@NgModule({
  declarations: [MiabmlistComponent],
  imports: [
    CommonModule,
    MiABMRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class MiABMModule { }
