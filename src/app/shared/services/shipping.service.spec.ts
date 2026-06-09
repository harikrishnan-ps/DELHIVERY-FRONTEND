import { TestBed } from '@angular/core/testing';
import { ShippingService } from './shipping.service';

describe('ShippingService', () => {
  let service: ShippingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingService]
    });
    service = TestBed.inject(ShippingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('App Download Links', () => {
    it('should return app download links', (done) => {
      service.getAppDownloadLinks().subscribe(links => {
        expect(links).toBeTruthy();
        expect(links.googlePlay).toBeDefined();
        expect(links.appStore).toBeDefined();
        expect(links.googlePlay).toContain('play.google.com');
        expect(links.appStore).toContain('apps.apple.com');
        done();
      });
    });
  });

  describe('Pincode Validation', () => {
    it('should validate correct 6-digit pincode', () => {
      expect(service.validatePincode('110001')).toBeTruthy();
      expect(service.validatePincode('560001')).toBeTruthy();
      expect(service.validatePincode('700001')).toBeTruthy();
    });

    it('should reject incorrect pincode format', () => {
      expect(service.validatePincode('12345')).toBeFalsy();
      expect(service.validatePincode('1234567')).toBeFalsy();
      expect(service.validatePincode('abcdef')).toBeFalsy();
      expect(service.validatePincode('110001a')).toBeFalsy();
      expect(service.validatePincode('')).toBeFalsy();
    });
  });

  describe('OTP Request', () => {
    it('should return OTP response with expiry', (done) => {
      service.getOTP('110001').subscribe(response => {
        expect(response).toBeTruthy();
        expect(response.success).toBeTruthy();
        expect(response.message).toContain('OTP');
        expect(response.expiresIn).toBe(300); // 5 minutes
        done();
      });
    });
  });

  describe('Form Submission', () => {
    it('should submit form with valid data', (done) => {
      const formData = {
        pickupPincode: '110001',
        deliveryPincode: '560001',
        shippingType: 'domestic' as const
      };

      service.submitShippingForm(formData).subscribe(response => {
        expect(response.success).toBeTruthy();
        expect(response.data).toEqual(formData);
        done();
      });
    });

    it('should handle international shipping type', (done) => {
      const formData = {
        pickupPincode: '110001',
        deliveryPincode: '560001',
        shippingType: 'international' as const
      };

      service.submitShippingForm(formData).subscribe(response => {
        expect(response.data.shippingType).toBe('international');
        done();
      });
    });
  });
});
