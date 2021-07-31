import { TestBed } from '@angular/core/testing';

import { TodosandpostsService } from './todosandposts-utils.service';

describe('TodosUtilsService', () => {
  let service: TodosandpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosandpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
