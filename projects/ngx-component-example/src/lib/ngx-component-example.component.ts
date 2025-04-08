import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngx-component-example',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './ngx-component-example.component.html',
  styleUrls: ['./ngx-component-example.component.scss'],
  standalone: true
})
export class NgxComponentExampleComponent {
  @Input() isRtl: boolean = false;
  @Input() exampleBackgroundColor: string = '#ffffff';
}
