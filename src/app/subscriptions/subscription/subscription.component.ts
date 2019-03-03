import { Component, OnInit, ViewChild } from '@angular/core';
import { SubscriptionService } from '../../shared/subscription.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore'; 

/*
  TODO:
  Amount - Support for multiple currencies with dropdown selection
  Amount - Add API for converting USD etc to NOK or so
  Amount - Custom Validator for min / max for amount for it to be valid
  Subscription List -  Add a summary at the bottom with Total Amount etc 
*/

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  // Convert this into it's own forloop if possible
  dates: any[] = [
    {value: '1', viewValue: '1st'},
    {value: '2', viewValue: '2nd'},
    {value: '3', viewValue: '3rd'},
    {value: '4', viewValue: '4th'},
    {value: '5', viewValue: '5th'},
    {value: '6', viewValue: '6th'},
    {value: '7', viewValue: '7th'},
    {value: '8', viewValue: '8th'},
    {value: '9', viewValue: '9th'},
    {value: '10', viewValue: '10th'},
    {value: '11', viewValue: '11th'},
    {value: '12', viewValue: '12th'},
    {value: '13', viewValue: '13th'},
    {value: '14', viewValue: '14th'},
    {value: '15', viewValue: '15th'},
    {value: '16', viewValue: '16th'},
    {value: '17', viewValue: '17th'},
    {value: '18', viewValue: '18th'},
    {value: '19', viewValue: '19th'},
    {value: '20', viewValue: '20th'},
    {value: '21', viewValue: '21st'},
    {value: '22', viewValue: '22nd'},
    {value: '23', viewValue: '23rd'},
    {value: '24', viewValue: '24th'},
    {value: '25', viewValue: '25th'},
    {value: '26', viewValue: '26th'},
    {value: '27', viewValue: '27th'},
    {value: '28', viewValue: '28th'},
    {value: '29', viewValue: '29th'},
    {value: '30', viewValue: '30th'},
    {value: '31', viewValue: '31st'}
  ];

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
      amount: null,
      paydate: ''
    }
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
