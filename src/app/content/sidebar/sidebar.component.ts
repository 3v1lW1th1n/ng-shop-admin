import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onOpen: EventEmitter<any> = new EventEmitter();
  public sidebarClick() {
    this.onOpen.emit();
  }
}
