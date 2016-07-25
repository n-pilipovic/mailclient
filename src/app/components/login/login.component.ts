import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl : `app/components/login/login.template.html`
})
export class LoginComponent {
    constructor(private authService:AuthService, private location:Location, private router:Router) {
        if (authService.isAuthenticated()) {
            this.location.replaceState('/');
            this.router.navigateByUrl('protected');
        }
        
        this.authService.subscribe((val) => {
            if (val.authenticated) {
                this.location.replaceState('/');
                this.router.navigateByUrl('protected');
            }
        });
    }

    get authenticated() {
        return this.authService.isAuthenticated();
    }

    doLogin() {
        this.authService.doLogin();
    }
}
