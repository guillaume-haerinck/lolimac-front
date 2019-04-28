import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, RouterEvent } from '@angular/router';

import { AuthService } from './core/services/auth.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    bMobile = true;
    url = '/';

    constructor(updates: SwUpdate,
        push: SwPush, breakpointObserver: BreakpointObserver,
        private m_authService: AuthService,
        private m_router: Router) 
    {
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

        m_router.events.subscribe((event: RouterEvent) => {
            if (event.url) {
                this.url = event.url;
            }
        });
    }
}
