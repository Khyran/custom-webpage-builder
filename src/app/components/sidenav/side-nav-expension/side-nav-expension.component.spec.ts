import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavExpensionComponent } from './side-nav-expension.component';

describe('SideNavExpensionComponent', () => {
  let component: SideNavExpensionComponent;
  let fixture: ComponentFixture<SideNavExpensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavExpensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavExpensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
