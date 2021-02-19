import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiabmlistComponent } from './components/miabmlist/miabmlist.component';

const routes: Routes = [{path:'',component:MiabmlistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiABMRoutingModule { }
