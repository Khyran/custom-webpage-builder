import { Component, Input, OnInit } from '@angular/core';
import { SideNavExpandable } from '../types/SideNavExpandable';

@Component({
  selector: 'app-side-nav-expension',
  templateUrl: './side-nav-expension.component.html',
  styleUrls: ['./side-nav-expension.component.scss'],
})
export class SideNavExpensionComponent implements OnInit {
  @Input() sideNavExpandable!: SideNavExpandable;

  constructor() {}

  ngOnInit(): void {}
}
