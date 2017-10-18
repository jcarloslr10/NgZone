import { Component, OnInit, DoCheck } from '@angular/core';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

    currentId: number = null;
    rectangles: Array<any> = [];
    offsetX: number;
    offsetY: number;

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
    }

    mouseMove(event): void {
        event.preventDefault();
        if (this.currentId !== null) {
            this.updateRectangle(this.currentId,
                event.clientX + this.offsetX,
                event.clientY + this.offsetY);
        }
    }

    mouseUp($event): void {
        this.currentId = null;
    }

    updateRectangle(id, x, y): void {
        const rectangle = this.rectangles[id];
        rectangle.x = x;
        rectangle.y = y;
    }
}
