import { TestBed } from '@angular/core/testing';

import { DynamicChartsService } from './dynamic-charts.service';

describe('DynamicChartsService', () => {
  let service: DynamicChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
