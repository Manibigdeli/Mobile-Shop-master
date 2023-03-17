import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesEditComponent } from './accessories-edit.component';

describe('AccessoriesEditComponent', () => {
  let component: AccessoriesEditComponent;
  let fixture: ComponentFixture<AccessoriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
