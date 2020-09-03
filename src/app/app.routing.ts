import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';

const appRoutes: Routes = [ 
    {path: '', component: ProjectsComponent},
    {path: 'about', component:AboutMeComponent},
    {path: 'create', component:CreateComponent},
    {path: '**', component: ProjectsComponent}    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);