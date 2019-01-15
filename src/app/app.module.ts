import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
 import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/env';
import { SubscriptionService } from './subscription.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig), // File not included in the git repo for security reasons
    AngularFireDatabaseModule
  ],
  providers: [SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
