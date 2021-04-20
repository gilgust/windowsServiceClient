import { TestBed } from '@angular/core/testing';

import { PrinterSignalrServiceService } from './printer-signalr-service.service';

describe('PrinterSignalrServiceService', () => {
  let service: PrinterSignalrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterSignalrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
