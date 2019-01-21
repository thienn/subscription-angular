export class AuthService {
    loggedIn = false;

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
}