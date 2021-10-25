import { Component, Input, OnInit } from '@angular/core';
import { SideNavItem } from '../types/SideNavItem';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
  @Input() sideNavItems!: SideNavItem[];

  constructor() {}

  ngOnInit(): void {}
}
