import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

import { AuthService } from './core/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(updates: SwUpdate, push: SwPush, private m_authService: AuthService) {
        push.messages.subscribe(message => {
            console.info("New push message recieved !");
            console.log(message);
        });
    }
}
