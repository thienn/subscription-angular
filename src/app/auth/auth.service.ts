import * as firebase from 'firebase';

export class AuthService {
    // loggedIn = false;

    // For admin, and other use cases later
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            ).catch(
                error => console.log(error)
            );
    }
 
    loginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            ).catch(
                error => console.log(error)
            );
    
    }

    /*
    isAuthenticated() {
        // Dummy test - Will implement proper authentication through Firebase later
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn) 
                }, 800);
            }
        )
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
    */
}