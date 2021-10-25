import { Component, Input, OnInit } from '@angular/core';
import { SideNavExpandable } from './types/SideNavExpandable';
import { SideNavItem } from './types/SideNavItem';

export type SideNavInput = {
  elements: [SideNavInput | SideNavExpandable] | null;
};

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() sideNavElements: any = { elements: [] };

  constructor() {
    const x: SideNavItem = {
      text: 'item',
      url: 'www.google.com',
      urlType: 'internal',
    };
    const test: SideNavExpandable = { sideNavItems: [x], title: 'expandable' };
    this.sideNavElements.elements.push(test, x);
  }

  ngOnInit(): void {}
}
