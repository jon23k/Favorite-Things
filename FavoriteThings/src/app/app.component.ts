import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

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

  setColor(selectedColor: string): void{
      console.log('You have selected the color' + selectedColor);
    firebase.database().ref().child('color').set(selectedColor);
  }

  updateColor(): void {
      firebase.database().ref().child('color').once('value',
      (snapshot: firebase.database.DataSnapshot) => {
              this.favoriteColor = snapshot.val();
      });

  }

  setNumber(aNumber: number): void {
    this.favoriteNumber = aNumber;
  }
}
