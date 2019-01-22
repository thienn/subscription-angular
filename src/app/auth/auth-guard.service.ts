import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         // Since it checks if the token is present or not, this is enough for the check if it's valid or not. And it is a boolean true / fails
         // So if it's not valid then send to the access denied (login message) or else go through
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login-message']);
        } else {
            return this.authService.isAuthenticated()
        }
    }
}