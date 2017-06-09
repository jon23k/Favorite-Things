import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things';
  favoriteColor = 'gray';

  setColor(selectedColor: string): void {
      console.log('You have selected the color' + selectedColor);
      this.favoriteColor = selectedColor;
  }
}
