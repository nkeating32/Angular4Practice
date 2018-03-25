import { Component } from '@angular/core'


@Component({
    selector: 'fav',
    template: `
        <button type="button" class="btn btn-default" (click)="onFavClick($event)"> 
            <span [class]="isFaved ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" style="font-size:4em"></span>
        </button>
    `
})
export class FavComponent {
    title = "Favorites"
    movieTitle: string
    isFaved = false

    onFavClick($event) {
        this.isFaved = !this.isFaved
        console.log("Star was clicked. Fav status now: " + this.isFaved, $event)
    }

}