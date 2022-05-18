import { TestBed, inject } from '@angular/core/testing';
import { AssetsHttpService } from './assets-http.service';

describe('AssetsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetsHttpService]
    });
  });

  it('should be created', inject([AssetsHttpService], (service: AssetsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
