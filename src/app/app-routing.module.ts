import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/family-ft/family-ft.module').then((m) => m.FamilyFtModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./features/list-ft/list-ft.module').then((m) => m.ListFtModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
