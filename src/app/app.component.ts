import { Component, OnInit } from '@angular/core';
import { SimpleAffineEditor } from '@blocksuite/editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-blocksuite';

  ngOnInit(): void {
    const editor = new SimpleAffineEditor();
    document.body.appendChild(editor);
  }
}
