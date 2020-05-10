import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CustomtimelistComponent } from './component/customtimelist/customtimelist.component';
import { AddcustomtimeComponent } from './component/addcustomtime/addcustomtime.component';
import { EditcustomtimeComponent } from './editcustomtime/editcustomtime.component';


const routes: Routes = [
    

{ path:'', redirectTo:'home', pathMatch:'full' },  
{ path:'home', component:HomeComponent}, 
{path:'list-customtime',component:CustomtimelistComponent},
{path:'add-customtime',component:AddcustomtimeComponent},
{path:'edit-component',component:EditcustomtimeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
