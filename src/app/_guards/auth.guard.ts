import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    /*
    Using CanActivate as route guard and simply checking if the currentUser object is inplace.
    This can and should be expanded to validating the token via a service to ensure validity
    */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }

        /* If not then kick them back to the login page */
        this.router.navigate( ['login'] );
        return false;
    }
}