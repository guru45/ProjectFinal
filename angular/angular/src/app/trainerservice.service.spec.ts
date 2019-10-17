import { TestBed } from '@angular/core/testing';

import { TrainerserviceService } from './trainerservice.service';

describe('TrainerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerserviceService = TestBed.get(TrainerserviceService);
    expect(service).toBeTruthy();
  });
});
