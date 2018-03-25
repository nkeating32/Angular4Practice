import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <div click="onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'" (click)="onSave($event)">Save</button>
        </div>
            <ul>
                <li *ngFor="let course of courses"> {{ course }} </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses"
    isActive = true
    courses;
    email = "me@test.com"

    onKeyUp() {
        console.log(this.email)
    }

    onDivCliced($event) {
        console.log("Div was clicked", $event)
    }

    onSave($event) {
        $event.stopPropagation()
        console.log("Button was clicked", $event)
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }
}