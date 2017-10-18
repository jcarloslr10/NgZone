import { Component, ApplicationRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = '...';

    constructor(private _appRef: ApplicationRef) {
        this.title = 'Angular 4';
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.title = 'Pragmatic Talks';
            this._appRef.tick();
        }, 2000);
    }
}
