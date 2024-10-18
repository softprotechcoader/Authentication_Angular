import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';




export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'',component:LayoutComponent, canActivate: [authGuard],
        children:[
            {
                path:'dashboard',component:DashboardComponent
            }
        ]
        
    },
    {path:'**',redirectTo:'login'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}