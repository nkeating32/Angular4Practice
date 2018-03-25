import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 10
  }
}
