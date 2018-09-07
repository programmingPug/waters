import { TestBed, inject } from '@angular/core/testing';

import { EmitcomService } from './emitcom.service';

describe('EmitcomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitcomService]
    });
  });

  it('should be created', inject([EmitcomService], (service: EmitcomService) => {
    expect(service).toBeTruthy();
  }));
});
