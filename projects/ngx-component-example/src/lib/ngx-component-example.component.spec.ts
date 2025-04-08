import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxComponentExampleComponent } from './ngx-component-example.component';

describe('NgxComponentExampleComponent', () => {
  let component: NgxComponentExampleComponent;
  let fixture: ComponentFixture<NgxComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxComponentExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
