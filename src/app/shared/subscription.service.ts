import { Injectable } from '@angular/core';
import { Subscription } from './subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  formData: Subscription;
  constructor() { }
}
