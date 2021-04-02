import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
        { path:'profile', component:ProfileComponent},
        { path:'', redirectTo:'/profile', pathMatch:"full"},
        { path:'repos', component:ReposComponent },
        { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
