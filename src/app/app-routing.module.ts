import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MylistService} from './my-list/mylist.service';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MylistService]
})
export class AppRoutingModule { }
