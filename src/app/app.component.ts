import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/env';
import 'hammerjs';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
      firebase.initializeApp({
        apiKey: environment.firebaseconfig.apiKey,
        authDomain: environment.firebaseconfig.authDomain,
        projectId: environment.firebaseconfig.projectId
      });
    }

}
