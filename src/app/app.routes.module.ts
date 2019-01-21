import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: SubscriptionsComponent },
    { path: 'login', component: AuthComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
    
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}