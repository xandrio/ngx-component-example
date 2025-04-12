import { TestBed } from '@angular/core/testing';

import { NgxWorkspaceSharedStylesService } from './ngx-workspace-shared-styles.service';

describe('NgxWorkspaceSharedStylesService', () => {
  let service: NgxWorkspaceSharedStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWorkspaceSharedStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
