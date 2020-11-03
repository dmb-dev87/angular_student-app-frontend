import { TestBed } from '@angular/core/testing';

import { StudentDomainService } from './student-domain.service';

describe('StudentDomainService', () => {
  let service: StudentDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
