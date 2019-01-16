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

  addSubscription(data: Subscription) {
    this.store.collection('subscriptions').add(data); 
  }

  updateSubscription(id: string, data: Subscription) {
    this.store.doc('subscriptions/' + id).update(data);
  }

  // Get the data from the selected object to add into the form (input fields)
  updateSubscriptionFields(subscription: Subscription) {
    this.formData = Object.assign({}, subscription);
  }

  deleteSubscription(id: string) {
    this.store.doc('subscriptions/' + id).delete();
  }


}
