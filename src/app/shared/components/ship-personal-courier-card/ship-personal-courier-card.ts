import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ShippingService, AppDownloadLinks } from '../../services/shipping.service';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-ship-personal-courier-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './ship-personal-courier-card.html',
  styleUrls: ['./ship-personal-courier-card.scss']
})
export class ShipPersonalCourierCardComponent implements OnInit, OnDestroy {
  shippingForm!: FormGroup;
  @Input() activeTab: 'track' | 'ship' = 'ship';
  activeShippingType: 'domestic' | 'international' = 'domestic';
  appDownloadLinks: AppDownloadLinks | null = null;
  isLoading = false;
  formSubmitted = false;

  readonly trackingModes = ['Email', 'AWB', 'Order Id', 'LRN'];
  readonly trackingPlaceholders = new Map([
    ['Email', 'Enter your email'],
    ['AWB', 'Enter your AWB number'],
    ['Order Id', 'Enter your order id'],
    ['LRN', 'Enter your LRN'],
  ]);
  readonly appBadges = [
    {
      alt: 'Google Play',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCRBnLku4HtE7g_jf7fTNm-NJ9iskPSv9C1hi-pOmqZ7DuWw0jnFwZirDpASgFq1KOC6-v07S2LQV4ojD4DEtp0mZO2T6jv6148xSy12BpO9FUZB_bur1yF0yBNLbURV-MlHk9b_1uXGLH-Q02YEBJIxbWqDbueV-2m0TZPiiArCjSCt-N6PQCTkcUgktLRG61GrmeYQDGzQoBjcZoqR3OwxnBCLqRkC_cBlkAUnnxHOGu5H42WRdViHVPwSgIJFbpYAWWEmpHxG3k',
    },
    {
      alt: 'App Store',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDpGUWQYi47yGsejFS-CQ3x-jjRJAEzkaYjkrALbawgfhxnNnoO1yKBFZmvXcjSpox8g_EeX28OvKPCjT8oz9YGa1yF6n79aETk0ZQ1e-DZBt9BvYso5FGMA_Mxt39sW1aaQI8gOifzb6lJwMBA7Yi0z9ynpKEq29Evp5tvE9CtjlDaNtmLobFSUnkhwAh9-xXnLLab3Z-AIPE_DnKZQhX8N21-PmW7vWDuLL-HwdCued7bF4Y8UKiKkYFi-cI0wLERHt9oh-lEj54',
    },
  ];
  selectedTrackingMode = this.trackingModes[0] ?? 'Email';
  trackingValue = '';

  // OTP Modal State
  showOtpModal = false;
  otpTarget = '';
  otpValues: string[] = ['', '', '', '', '', ''];
  otpContext: 'ship' | 'track' = 'ship';
  agreedToTerms = false;
  otpError = 'OTP was already sent less than 60s ago, please retry after some time';

  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private shippingService: ShippingService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadAppDownloadLinks();
  }

  /**
   * Initialize the shipping form with validation
   */
  private initializeForm(): void {
    this.shippingForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      pickupPincode: ['', [
        Validators.required,
        Validators.pattern(/^\d{6}$/)
      ]],
      deliveryPincode: ['', [
        Validators.required,
        Validators.pattern(/^\d{6}$/)
      ]],
      shippingType: ['domestic', Validators.required]
    });
  }

  /**
   * Load app download links from service
   */
  private loadAppDownloadLinks(): void {
    this.shippingService.getAppDownloadLinks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((links: AppDownloadLinks) => {
        this.appDownloadLinks = links;
      });
  }

  selectTrackingMode(mode: string): void {
    this.selectedTrackingMode = mode;
  }

  trackingPlaceholder(): string {
    return this.trackingPlaceholders.get(this.selectedTrackingMode) ?? 'Enter tracking details';
  }

  /**
   * Set active tab
   */
  setActiveTab(tab: 'track' | 'ship'): void {
    this.activeTab = tab;
  }

  /**
   * Set active shipping type
   */
  setShippingType(type: 'domestic' | 'international'): void {
    this.activeShippingType = type;
    this.shippingForm.patchValue({ shippingType: type });
  }

  /**
   * Get form control for easy access in template
   */
  getFormControl(controlName: string) {
    return this.shippingForm.get(controlName);
  }

  /**
   * Check if form control has error
   */
  hasError(controlName: string, errorName: string): boolean {
    const control = this.shippingForm.get(controlName);
    return !!(
      control &&
      control.hasError(errorName) &&
      (control.dirty || control.touched || this.formSubmitted)
    );
  }

  /**
   * Submit the shipping form and get OTP
   */
  submitForm(): void {
    this.formSubmitted = true;
    if (this.shippingForm.invalid) {
      return;
    }
    
    const email = this.shippingForm.value.email;
    
    // Open modal immediately so user doesn't wait
    this.openOtpModal('ship', email);
    
    this.apiService.post('otp/send', { email }).subscribe({
      next: () => {
        // success silently
      },
      error: (err: any) => {
        alert('Failed to send OTP: ' + (err.error?.title || err.message));
      }
    });
  }

  /**
   * Track order logic
   */
  trackOrder(): void {
    if (this.selectedTrackingMode === 'Email' && this.trackingValue) {
      this.openOtpModal('track', this.trackingValue);
      this.apiService.post('otp/send', { email: this.trackingValue }).subscribe({
        next: () => {
          // success silently
        },
        error: (err: any) => alert('Failed to send OTP: ' + (err.error?.title || err.message))
      });
    } else {
      console.log('Tracking...', this.selectedTrackingMode, this.trackingValue);
    }
  }

  /**
   * OTP Modal Methods
   */
  openOtpModal(context: 'ship' | 'track', target: string): void {
    this.otpContext = context;
    this.otpTarget = target;
    this.otpValues = ['', '', '', '', '', ''];
    this.agreedToTerms = false;
    this.showOtpModal = true;
  }

  closeOtpModal(): void {
    this.showOtpModal = false;
  }

  onOtpInput(event: any, index: number): void {
    const input = event.target;
    const value = input.value;
    
    // Only allow numbers
    if (/[^0-9]/.test(value)) {
      input.value = value.replace(/[^0-9]/g, '');
      return;
    }
    
    this.otpValues[index] = input.value;
    
    // Auto-focus next input
    if (value && index < 5) {
      setTimeout(() => {
        const nextInput = input.parentElement.children[index + 1] as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }, 10);
    }
  }
  
  onOtpKeyDown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && !input.value && index > 0) {
      const prevInput = input.parentElement?.children[index - 1] as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  submitOtp(): void {
    if (!this.agreedToTerms) return;
    
    const otpCode = this.otpValues.join('');
    
    this.apiService.post('otp/verify', { email: this.otpTarget, otp: otpCode }).subscribe({
      next: () => {
        console.log('OTP Verified successfully');
        this.closeOtpModal();
        
        if (this.otpContext === 'ship') {
          this.router.navigate(['/direct/app/address-details'], { queryParams: { email: this.otpTarget } });
        } else {
          console.log('Tracking via email success');
          this.router.navigate(['/track-v2/my-orders']);
        }
      },
      error: (err: any) => {
        this.otpError = err.error?.title || 'Invalid or expired OTP';
      }
    });
  }

  /**
   * Navigate to business signup page
   */
  navigateToBusiness(): void {
    window.open('/signup-business', '_blank');
  }

  /**
   * Open app download link
   */
  openAppDownload(platform: 'googlePlay' | 'appStore'): void {
    if (this.appDownloadLinks) {
      const link = platform === 'googlePlay' 
        ? this.appDownloadLinks.googlePlay 
        : this.appDownloadLinks.appStore;
      window.open(link, '_blank');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
