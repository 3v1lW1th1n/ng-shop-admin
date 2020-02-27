import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'shop-admin';
  public isOpen = true;
  public changeSidebar(value) {
  
    this.isOpen = !this.isOpen;
  }
}
