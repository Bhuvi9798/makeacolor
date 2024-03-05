import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgComponent } from './cg/cg.component';
import { CgzeroComponent } from './cgzero/cgzero.component';

const routes: Routes = [
  {
    path: '',
    component: CgzeroComponent,
  },
  {
    path: 'rgba',
    component: CgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
