import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from '../../shared/subscription.model';
import { SubscriptionService } from '../../shared/subscription.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'amount', 'paydate', 'delete'];
  listOfSubscriptions: Subscription[]; // Array to store the subscriptions from the DB
  @ViewChild(MatSort) sort: MatSort;
  dataSource;

  constructor(private subService: SubscriptionService, private store: AngularFirestore) { }

  ngOnInit() {
    // on init, subscribe to the service that will get the data from Firebase, then spread out that data for the list to use. Due to the subscribe it will create an observable that will update whenever new data comes from the DB
    this.subService.getSubscriptions().subscribe(data => {
      this.listOfSubscriptions = data.map(subscription => {
        return {
          id: subscription.payload.doc.id,
          ...subscription.payload.doc.data()
        } as Subscription;
      })
     this.dataSource = new MatTableDataSource(this.listOfSubscriptions)
     this.dataSource.sort = this.sort;
    });
  }
  
  // To populate the input fields when clicking on a item
  onUpdateMode(subcription: Subscription) {
    this.subService.updateSubscriptionFields(subcription);
  }

  onDelete(id: string) {
    if(confirm("This will be permanently deleted from the DB")) {
      this.subService.deleteSubscription(id);
    }
  }
}
