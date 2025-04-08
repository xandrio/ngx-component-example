import { TestBed } from '@angular/core/testing';

import { NgxComponentExampleService } from './ngx-component-example.service';

describe('NgxComponentExampleService', () => {
  let service: NgxComponentExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxComponentExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
