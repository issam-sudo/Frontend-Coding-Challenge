import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesContainerComponent } from './core/components/repositories-container/repositories-container.component';
import { RepositoriesDetailsComponent } from './core/components/repositories-details/repositories-details.component';

const routes: Routes = [
  {path:'', component:RepositoriesContainerComponent, children: [
    {path:'' , component:RepositoriesDetailsComponent}]},
    {path:'**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
