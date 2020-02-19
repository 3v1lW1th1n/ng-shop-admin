import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onOpen: EventEmitter<string> = new EventEmitter();
  public toggleSidebar(value: string) {
    this.onOpen.emit(value);
    console.log('child');
  }
}
