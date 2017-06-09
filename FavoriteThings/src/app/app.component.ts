import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things';
  favoriteColor = 'gray';
  favoriteNumber = 0;
    constructor(db: AngularFireDatabase) {

  }

  setColor(selectedColor: string): void {
      console.log('You have selected the color' + selectedColor);
      this.favoriteColor = selectedColor;
  }

  setNumber(aNumber: number): void {
    this.favoriteNumber = aNumber;
  }
}
