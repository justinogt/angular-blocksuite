import { Component, OnInit } from '@angular/core';
import { SimpleAffineEditor } from '@blocksuite/editor';

console.assert(SimpleAffineEditor !== undefined);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-blocksuite';
}

