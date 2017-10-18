import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
    private _element: any;

    currentId: number = null;
    rectangles: Array<any> = [];
    offsetX: number;
    offsetY: number;

    constructor(private _zone: NgZone) { }

    ngOnInit(): void {
        for (let i = 0; i < 20000; i++) {
            const id = i;
            const x = getRandomNumber(0, 1800);
            const y = getRandomNumber(0, 900);
            const rectangle = {
                id,
                x,
                y
            };
            this.rectangles.push(rectangle);
        }
    }

    ngDoCheck(): void {
        console.log('Change detector');
    }

    mouseDown(event): void {
        const id = Number(event.target.getAttribute('dataId'));
        const rectangle = this.rectangles[id];
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        this.offsetX = rectangle.x - mouseX;
        this.offsetY = rectangle.y - mouseY;
        this.currentId = id;

        this._element = event.target;
        this._zone.runOutsideAngular(() => {
            window.document.addEventListener('mousemove', this.mouseMove);
        });
    }

    mouseMove = (event): void => {
        event.preventDefault();
        this._element.setAttribute('x', event.clientX + this.offsetX + 'px');
        this._element.setAttribute('y', event.clientY + this.offsetY + 'px');
    }

    mouseUp($event): void {
        this._zone.run(() => {
            this.updateRectangle(this.currentId,
                $event.clientX + this.offsetX,
                $event.clientY + this.offsetY);

            this.currentId = null;
        });
        window.document.removeEventListener('mousemove', this.mouseMove);
    }

    updateRectangle(id, x, y): void {
        const rectangle = this.rectangles[id];
        rectangle.x = x;
        rectangle.y = y;
    }
}
