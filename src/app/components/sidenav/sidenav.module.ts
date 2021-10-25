import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavExpensionComponent } from './side-nav-expension/side-nav-expension.component';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';
import { SideNavComponent } from './sidenav.component';

@NgModule({
  declarations: [
    SideNavComponent,
    SideNavItemComponent,
    SideNavExpensionComponent,
  ],
  imports: [CommonModule, MatSidenavModule, MatExpansionModule, MatListModule],
  exports: [SideNavComponent, SideNavItemComponent],
})
export class SideNavModule {}
