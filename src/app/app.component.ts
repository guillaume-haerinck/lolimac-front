import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { AuthService } from './core/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    bMobile = true;

    constructor(updates: SwUpdate, push: SwPush, breakpointObserver: BreakpointObserver, private m_authService: AuthService) {
        push.messages.subscribe(message => {
            console.info("New push message recieved !");
            console.log(message);
        });

        breakpointObserver.observe([
            '(min-width: 800px)'
          ]).subscribe(result => {
            if (result.matches) {
                this.bMobile = false;
            } else {
                this.bMobile = true;
            }
          });
    }
}
