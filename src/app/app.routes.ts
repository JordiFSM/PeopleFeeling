import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren:() => import('./modules').then(a => a.HomeModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
