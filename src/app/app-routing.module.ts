import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HerologinComponent } from './herologin/herologin.component';
import { AdddataComponent } from './adddata/adddata.component';
import { MovielistComponent } from './movielist/movielist.component';


const routes: Routes = [
  {path:'movie',component:MovielistComponent},
  {path:'adddata',component:AdddataComponent},
  {path:'herologin',component:HerologinComponent},
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:RegisterformComponent},
  {path:'examples',component:ExamplesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
