import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
    {
        path:"employee", component:EmployeeListComponent
    
    },
    {
        path: 'login', component:HomeComponent 
          
    }

];
