import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWorkspaceSharedStylesComponent } from './ngx-workspace-shared-styles.component';

describe('NgxWorkspaceSharedStylesComponent', () => {
  let component: NgxWorkspaceSharedStylesComponent;
  let fixture: ComponentFixture<NgxWorkspaceSharedStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxWorkspaceSharedStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWorkspaceSharedStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
