import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'seat', redirectTo: 'seat/index', pathMatch: 'full'},
  { path: 'seat/index', component: IndexComponent },
  { path: 'seat/:postId/view', component: ViewComponent },
  { path: 'seat/create', component: CreateComponent },
  { path: 'seat/:postId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatRoutingModule { }