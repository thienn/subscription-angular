import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router, private snackBar: MatSnackBar) {

    }

    // For admin, and other use cases later
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.openSnackBar(`Registered account as ${email}`)
                    console.log(response)
                } 
                //response => console.log(response)
            ).catch(
                error => console.log(error)
            );
    }
 
    loginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log(response)
                    this.router.navigate(['/']);
                    // After logging in assign the token given for the user to the local one
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )

                    this.openSnackBar(`Logged in as ${email}`)
                }
            ).catch(
                error => console.log(error)
            );
    
    }

    logout() {
        firebase.auth().signOut();
        this.token = null; // clean out the local token
        this.openSnackBar(`User logged out`)
        this.router.navigate(['/login'])
    }

    // Get the token from backend (Firebase) - and store it
    // Async task, as it will check locally first if it's still valid, if not then connect to the firebase again to get a new one.
    getToken() {
       // return firebase.auth().currentUser.getIdToken();
       firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token
    }

    isAuthenticated() {
        return this.token != null;
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, 'OK', {
            duration: 5000,
        });
    }

}