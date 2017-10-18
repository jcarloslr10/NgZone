import { Component, ApplicationRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular 4';

    constructor(appRef: ApplicationRef) {
        setTimeout(() => {
            this.title = 'Pragmatic Talks';
            appRef.tick();
        }, 1000);
    }
}
