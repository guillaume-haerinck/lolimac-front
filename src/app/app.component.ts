import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'imac-resoi-front';

    constructor(updates: SwUpdate, push: SwPush) {
        push.messages.subscribe(message => {
            console.info("New push message recieved !");
            console.log(message);
        });
    }
}
