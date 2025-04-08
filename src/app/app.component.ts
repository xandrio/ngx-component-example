import { Component } from '@angular/core';
import { NgxComponentExampleComponent } from '../../projects/ngx-component-example/src/public-api';

@Component({
  selector: 'app-root',
  imports: [ NgxComponentExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-workspace';
}
