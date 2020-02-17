import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'shop-admin';
  public isOpen!: boolean;
  public changeSidebar() {
    this.isOpen = !this.isOpen;
    console.log(111);
  }
}
