import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../shared/subscription.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore'; 

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  // Import the global sucriptionService and connect to the firestore API
  constructor(private subService: SubscriptionService, private store: AngularFirestore) { }

  ngOnInit() {
    this.resetForm(); // To initalize the properties on startup
  }

  resetForm(form?: NgForm) {
    // If the form got content then reset it in the DOM, then the formData in the service
    if (form != null) {
      form.resetForm();
    } 
    this.subService.formData = {
      id: null,
      title: '',
      description: '',
      amount: '',
      paydate: ''
    }
  } 

  clearFields() {
    this.resetForm();
  }  

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value); // Get the data from the form (input fields) 
    delete data.id; // Delete the ID as Firestore will create it's own
    if (form.value.id == null) {
      this.subService.addSubscription(data);
    } else {
     this.subService.updateSubscription(form.value.id, data);
    }
    this.resetForm(form);
  }



}
