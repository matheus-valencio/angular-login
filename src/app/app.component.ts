import { Component, VERSION } from '@angular/core';

interface Auth{
   token: string;
   username: string;
   profile: Array<string>;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
