import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { Router, RouterEvent } from '@angular/router';

import { AuthService } from './core/services/auth.service';
import { ResponsiveService } from './core/services/responsive.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    bMobile = true;
    bVisitor = true;

    constructor(updates: SwUpdate, push: SwPush,
        authService: AuthService,
        responsiveService: ResponsiveService,
        router: Router) 
    {
        push.messages.subscribe(message => {
            console.info("New push message recieved !");
            console.log(message);
        });

        responsiveService.isMobile().subscribe(result => {
            if (result.matches) {
                this.bMobile = false;
            } else {
                this.bMobile = true;
            }
        });

        router.events.subscribe((event: RouterEvent) => {
            if (event.url) {
                if (event.url.search("visiteur") != -1 || event.url.search("404") != -1) {
                    this.bVisitor = true;
                } else {
                    this.bVisitor = false;
                }
            }
        });
    }
}
