import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from './subscription.model';

// dependency injection for service to handle the CRUD operations in relation to Firebase
export class SubscriptionService {
    constructor(private store: AngularFirestore) {}

    getSubscriptions() {
        return this.store.collection('subscriptions').snapshotChanges(); // snapshotChanges to run a observable that will look for changes
    }

    createSubscription(subscription: Subscription) {
        return this.store.collection('subscriptions').add(subscription);
    }

    updateSubscription(subscription: Subscription) {
        delete subscription.id;
        this.store.doc('subscriptions/' + subscription.id).update(subscription);
    }

    deleteSubscription(subscriptionId: String) {
        this.store.doc('subscriptions/' + subscriptionId).delete();
    }
}