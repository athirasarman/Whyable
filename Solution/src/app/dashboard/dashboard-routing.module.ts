import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent} from './layout/layout.component';
import { CategoriesComponent} from './categories/categories.component'


const routes: Routes = [
{ path: 'layout', component: LayoutComponent },
{ path: 'categories', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DashboardRoutingModule { }
