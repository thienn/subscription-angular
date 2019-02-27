import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from '../../shared/subscription.model';
import { SubscriptionService } from '../../shared/subscription.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort, MatTableDataSource } from '@angular/material';

/* TODO:
  Either limit the filter or add something to take in pipes as it directly look at the data itself atm. So things like st, rd, NOK etc isn't currently working
*/

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

  /* https://material.angular.io/components/table/overview#filtering */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase(); // lowercase to avoid case sensitivity
  }
    
    /** Gets the total cost of all transactions. */
    getTotalCost() {
      //return this.dataSource.map(t => t.amount).reduce((acc, value) => acc + value, 0);
      //this.dataSource = new MatTableDataSource(this.listOfSubscriptions)
      //return this.dataSource.map(t => t.amount).reduce((acc, value) => acc + value, 0);
      return 'Not implemented yet';
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
