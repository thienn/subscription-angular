import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/env';
import { SubscriptionService} from './shared/subscription.service';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionComponent } from './subscriptions/subscription/subscription.component';
import { SubscriptionListComponent } from './subscriptions/subscription-list/subscription-list.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './app-material/app-material.module';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';

import { AppRoutingModule } from './app.routes.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    SubscriptionComponent,
    SubscriptionListComponent,
    HeaderComponent,
    AuthComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig), // File not included in the git repo for security reasons
    AngularFirestoreModule,
    AppMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [SubscriptionService], // provide the service globally to the whole application as it is the main function in the application
  bootstrap: [AppComponent]
})
export class AppModule { }
