//These first 3 lines will be deprecated by the final release
import {Component} from "@angular/core";

import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {Location} from "@angular/common";
import {AuthService} from '../../services/auth.service';


@Component({
    selector: 'navbar',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [],
    templateUrl : `app/components/navbar/navbar.template.html`
})
export class Navbar {
    constructor(private authService:AuthService) {
    }

    get authenticated() {
        return this.authService.isAuthenticated();
    }

    doLogout() {
        this.authService.doLogout();
    }

    get userName() {
        return this.authService.getUserName();
    }
}

