import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../shared/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  // Import the global sucriptionService
  constructor(private subService: SubscriptionService) { }

  ngOnInit() {
  }

}
