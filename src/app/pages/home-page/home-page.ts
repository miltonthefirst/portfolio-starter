import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

  @Input()
  title = '';
  name: string = 'Milton Gore';
  role: string = 'Software Engineer';
}
