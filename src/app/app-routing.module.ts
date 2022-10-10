import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { CreateOrUpdateComponent } from './pages/heroes/create-or-update/create-or-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes', component: HeroesComponent,
    // loadChildren: () =>
    //   import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: 'heroes/new', component: CreateOrUpdateComponent },
  { path: 'heroes/:id', component: CreateOrUpdateComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
