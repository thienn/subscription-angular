import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/env';
import { SubscriptionService} from './shared/subscription.service';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionComponent } from './subscriptions/subscription/subscription.component';
import { SubscriptionListComponent } from './subscriptions/subscription-list/subscription-list.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    SubscriptionComponent,
    SubscriptionListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig), // File not included in the git repo for security reasons
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [SubscriptionService], // provide the service globally to the whole application as it is the main function in the application
  bootstrap: [AppComponent]
})
export class AppModule { }
