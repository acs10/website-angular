import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupagesComponent } from './menupages.component';

describe('MenupagesComponent', () => {
  let component: MenupagesComponent;
  let fixture: ComponentFixture<MenupagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenupagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
