import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyGridComponent } from './mygrid/mygrid.component';
import { MyMonsterGridComponent } from './mymonstergrid/mymonstergrid.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'mygrid', component: MyGridComponent, data: { text: 'myGrid' } },
  { path: 'mymonstergrid', component: MyMonsterGridComponent, data: { text: 'myMonsterGrid' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
