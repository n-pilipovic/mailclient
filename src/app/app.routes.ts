import {LoginComponent} from './components/login/login.component'
import {ProtectedPage} from './components/pages/protected-page'
import {LoggedoutPage} from "./components/pages/loggedout-page";

export const AppRoutes:Array<Object> = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'protected', pathMatch: 'full', component: ProtectedPage },
    { path: 'loggedout', pathMatch: 'full', component: LoggedoutPage }
];

