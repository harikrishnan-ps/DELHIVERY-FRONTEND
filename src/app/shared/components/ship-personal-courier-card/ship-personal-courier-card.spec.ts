import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ShipPersonalCourierCardComponent } from './ship-personal-courier-card';
import { ShippingService } from '../services/shipping.service';

describe('ShipPersonalCourierCardComponent', () => {
  let component: ShipPersonalCourierCardComponent;
  let fixture: ComponentFixture<ShipPersonalCourierCardComponent>;
  let shippingService: ShippingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipPersonalCourierCardComponent, ReactiveFormsModule],
      providers: [ShippingService]
    }).compileComponents();

    fixture = TestBed.createComponent(ShipPersonalCourierCardComponent);
    component = fixture.componentInstance;
    shippingService = TestBed.inject(ShippingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Initialization', () => {
    it('should initialize shipping form with empty values', () => {
      expect(component.shippingForm.get('pickupPincode')?.value).toBe('');
      expect(component.shippingForm.get('deliveryPincode')?.value).toBe('');
      expect(component.shippingForm.get('shippingType')?.value).toBe('domestic');
    });

    it('should have required validators on pincode fields', () => {
      const pickupControl = component.shippingForm.get('pickupPincode');
      pickupControl?.setValue('');
      expect(pickupControl?.hasError('required')).toBeTruthy();
    });

    it('should validate pincode format (6 digits)', () => {
      const pickupControl = component.shippingForm.get('pickupPincode');
      pickupControl?.setValue('12345');
      expect(pickupControl?.hasError('pattern')).toBeTruthy();

      pickupControl?.setValue('123456');
      expect(pickupControl?.hasError('pattern')).toBeFalsy();
    });
  });

  describe('Tab Navigation', () => {
    it('should initialize with ship tab active', () => {
      expect(component.activeTab).toBe('ship');
    });

    it('should set active tab when clicked', () => {
      component.setActiveTab('track');
      expect(component.activeTab).toBe('track');

      component.setActiveTab('ship');
      expect(component.activeTab).toBe('ship');
    });
  });

  describe('Shipping Type Selection', () => {
    it('should initialize with domestic shipping type', () => {
      expect(component.activeShippingType).toBe('domestic');
    });

    it('should update shipping type when selected', () => {
      component.setShippingType('international');
      expect(component.activeShippingType).toBe('international');
      expect(component.shippingForm.get('shippingType')?.value).toBe('international');
    });
  });

  describe('Form Submission', () => {
    it('should not submit form with invalid data', () => {
      component.shippingForm.patchValue({
        pickupPincode: '12345',
        deliveryPincode: ''
      });
      spyOn(shippingService, 'getOTP');
      component.submitForm();
      expect(shippingService.getOTP).not.toHaveBeenCalled();
    });

    it('should submit form with valid data', (done) => {
      component.shippingForm.patchValue({
        pickupPincode: '110001',
        deliveryPincode: '110002'
      });
      spyOn(shippingService, 'getOTP').and.returnValue(
        of({ success: true, message: 'OTP sent' })
      );

      component.submitForm();
      fixture.detectChanges();

      setTimeout(() => {
        expect(shippingService.getOTP).toHaveBeenCalledWith('110001');
        done();
      }, 100);
    });

    it('should set formSubmitted flag when submit is called', () => {
      expect(component.formSubmitted).toBeFalsy();
      component.submitForm();
      expect(component.formSubmitted).toBeTruthy();
    });
  });

  describe('Error Handling', () => {
    it('should display error when pincode format is invalid', () => {
      const pickupControl = component.shippingForm.get('pickupPincode');
      pickupControl?.setValue('abcdef');
      pickupControl?.markAsTouched();
      expect(component.hasError('pickupPincode', 'pattern')).toBeTruthy();
    });

    it('should not display error on pristine field', () => {
      const pickupControl = component.shippingForm.get('pickupPincode');
      pickupControl?.setValue('12345');
      expect(component.hasError('pickupPincode', 'pattern')).toBeFalsy();
    });
  });

  describe('App Download Links', () => {
    it('should load app download links on init', (done) => {
      spyOn(shippingService, 'getAppDownloadLinks').and.returnValue(
        of({
          googlePlay: 'https://play.google.com/store/apps/details?id=com.delhivery',
          appStore: 'https://apps.apple.com/in/app/delhivery/id1234567890'
        })
      );

      component.ngOnInit();
      fixture.detectChanges();

      setTimeout(() => {
        expect(component.appDownloadLinks).toBeTruthy();
        expect(component.appDownloadLinks?.googlePlay).toBeDefined();
        expect(component.appDownloadLinks?.appStore).toBeDefined();
        done();
      }, 100);
    });
  });

  describe('Navigation Actions', () => {
    it('should navigate to business signup', () => {
      spyOn(window, 'open');
      component.navigateToBusiness();
      expect(window.open).toHaveBeenCalledWith('/signup-business', '_blank');
    });

    it('should open Google Play download link', () => {
      component.appDownloadLinks = {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.delhivery',
        appStore: 'https://apps.apple.com/in/app/delhivery/id1234567890'
      };
      spyOn(window, 'open');
      component.openAppDownload('googlePlay');
      expect(window.open).toHaveBeenCalledWith(
        'https://play.google.com/store/apps/details?id=com.delhivery',
        '_blank'
      );
    });

    it('should open App Store download link', () => {
      component.appDownloadLinks = {
        googlePlay: 'https://play.google.com/store/apps/details?id=com.delhivery',
        appStore: 'https://apps.apple.com/in/app/delhivery/id1234567890'
      };
      spyOn(window, 'open');
      component.openAppDownload('appStore');
      expect(window.open).toHaveBeenCalledWith(
        'https://apps.apple.com/in/app/delhivery/id1234567890',
        '_blank'
      );
    });
  });

  describe('Cleanup', () => {
    it('should unsubscribe on component destroy', () => {
      spyOn(component['destroy$'], 'next');
      spyOn(component['destroy$'], 'complete');
      component.ngOnDestroy();
      expect(component['destroy$'].next).toHaveBeenCalled();
      expect(component['destroy$'].complete).toHaveBeenCalled();
    });
  });
});

// Import for testing
import { of } from 'rxjs';
