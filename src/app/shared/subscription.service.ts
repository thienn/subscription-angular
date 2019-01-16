import { Injectable } from '@angular/core';
import { Subscription } from './subscription.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  formData: Subscription;

  constructor(private store: AngularFirestore) { }

  getSubscriptions() {
    return this.store.collection('subscriptions').snapshotChanges(); // get the list + snapshotChanges to get the meta data needed for update / delete etc
  }

  

}
