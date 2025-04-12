import { Component } from '@angular/core';
import { NgxComponentExampleComponent } from '../../projects/ngx-component-example/src/public-api';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [ NgxComponentExampleComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-workspace';
}
