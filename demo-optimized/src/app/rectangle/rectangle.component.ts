import { Component, Input } from '@angular/core';

@Component({
    selector: '[app-rectangle]',
    templateUrl: 'rectangle.component.html'
})
export class RectangleComponent {
    @Input() rectangle: any;
    @Input() selected: boolean;
}

