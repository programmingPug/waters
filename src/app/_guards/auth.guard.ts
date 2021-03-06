﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    /*
    Using CanActivate as route guard and simply checking if the currentUser object is in place.
    This can and should be expanded to validating the token via a service to ensure validity
    */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        /* In the real world I would pull this into a local class and have a service validate the token, but for the sake of the demo we'll just accept that this dude is valid*/
        if (localStorage.getItem('currentUser')) {
            return true;
        }

        /* If not then kick them back to the login page */
        this.router.navigate(['login']);
        return false;
    }

}