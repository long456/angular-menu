import { Component } from '@angular/core';
import {GetMenuItemService} from "./pages/shared/services/get-menu-item";
import {MenuItem} from "./pages/shared/models/MenuItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  constructor(
    private getMenuItemSvc: GetMenuItemService
  ) {
  }
  item: MenuItem[] = []

  ngOnInit(): void {
    this.getMenuItemSvc.getMenuItem().subscribe((data: MenuItem[]) => {
      this.item = data;
    })
  }
}
