import { Injectable } from '@angular/core';
import { Subscription } from './subscription.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  formData: Subscription;

  constructor(private store: AngularFirestore, private snackBar: MatSnackBar) { }

  getSubscriptions() {
    return this.store.collection('subscriptions').snapshotChanges(); // get the list + snapshotChanges to get the meta data needed for update / delete etc
  }

  addSubscription(data: Subscription) {
    this.store.collection('subscriptions').add(data);
    this.openSnackBar(`${data.title} - added to the subscription list`) 
  }

  updateSubscription(id: string, data: Subscription) {
    this.store.doc('subscriptions/' + id).update(data);
    this.openSnackBar(`${data.title} - successfully updated`) 
  }

  // Get the data from the selected object to add into the form (input fields)
  updateSubscriptionFields(subscription: Subscription) {
    this.formData = Object.assign({}, subscription);
  }

  deleteSubscription(id: string) {
    this.store.doc('subscriptions/' + id).delete();
    this.openSnackBar(`Subscription deleted from the subscription list`) 
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
    });
  }


}
