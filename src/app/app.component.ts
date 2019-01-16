import { Component, OnInit  } from '@angular/core';
import { SubscriptionService } from '../app/subscription.service';
import { Subscription } from '../app/subscription.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'subscription-angular';
  subscriptions: Subscription[]; // Array of subscriptions to show up (to get from the database)

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscriptionService.getSubscriptions().subscribe(data => {
      this.subscriptions = data.map(subcription => {
        return {
          id: subcription.payload.doc.id,
          ...subcription.payload.doc.data()
        } as Subscription;
      })
    });
  }

  create(subscription: Subscription) {
    this.subscriptionService.createSubscription(subscription);
  }

  /*
  update(subscription: Subscription) {
    this.subscriptionService.updateSubscription(subscription);
  }

  delete(id: string) {
    this.subscriptionService.deleteSubscription(id);
  }
  */
}
