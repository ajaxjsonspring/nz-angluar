import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  array = [ 1, 2, 3, 4 ];
  effect = 'scrollx';

  ngOnInit() {
    setTimeout(() => {
      this.effect = 'fade';
    }, 3000);
  }
}
