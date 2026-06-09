# Ship Personal Courier Card Component

A pixel-perfect, accessible Angular component that replicates the Delhivery "Ship Personal Courier" card UI. This component is fully featured with reactive forms, form validation, and service integration.

## Features

- ✅ Exact pixel-perfect replication of Delhivery UI design
- ✅ Tab navigation (Track Order / Ship Order)
- ✅ Segmented toggle for Domestic/International shipping
- ✅ Reactive Forms with validation
- ✅ Vertical dotted connector line with icons
- ✅ Two pincode input fields with validation
- ✅ Primary CTA button with loading state
- ✅ Business signup link
- ✅ App promotion section with download buttons
- ✅ Fully accessible (WCAG 2.1 compliant)
- ✅ Responsive design (mobile-first)
- ✅ SCSS variables for easy theming
- ✅ Comprehensive test coverage
- ✅ Standalone Angular component
- ✅ TypeScript strict mode compatible

## Installation & Usage

### Import the Component

```typescript
import { ShipPersonalCourierCardComponent } from '@app/shared/components/ship-personal-courier-card/ship-personal-courier-card';

@Component({
  selector: 'app-root',
  imports: [ShipPersonalCourierCardComponent],
  template: `<app-ship-personal-courier-card></app-ship-personal-courier-card>`
})
export class AppComponent {}
```

### Use in Template

```html
<app-ship-personal-courier-card></app-ship-personal-courier-card>
```

## Component Structure

```
src/app/shared/
├── components/
│   └── ship-personal-courier-card/
│       ├── ship-personal-courier-card.ts        (Component class)
│       ├── ship-personal-courier-card.html      (Template)
│       ├── ship-personal-courier-card.scss      (Styles)
│       └── ship-personal-courier-card.spec.ts   (Tests)
└── services/
    └── shipping.service.ts                      (Shipping service)
```

## Services

### ShippingService

The `ShippingService` provides all business logic for the component.

#### Methods

##### `getAppDownloadLinks(): Observable<AppDownloadLinks>`
Retrieves the app download links for Google Play and App Store.

```typescript
this.shippingService.getAppDownloadLinks().subscribe(links => {
  console.log(links.googlePlay);
  console.log(links.appStore);
});
```

##### `validatePincode(pincode: string): boolean`
Validates if a pincode is in the correct format (6 digits).

```typescript
const isValid = this.shippingService.validatePincode('110001');
```

##### `submitShippingForm(formData: ShippingFormData): Observable<any>`
Submits the shipping form data.

```typescript
const formData: ShippingFormData = {
  pickupPincode: '110001',
  deliveryPincode: '110002',
  shippingType: 'domestic'
};

this.shippingService.submitShippingForm(formData).subscribe(response => {
  console.log('Form submitted:', response);
});
```

##### `getOTP(pincode: string): Observable<any>`
Requests an OTP for the given pincode.

```typescript
this.shippingService.getOTP('110001').subscribe(response => {
  console.log('OTP sent, expires in:', response.expiresIn);
});
```

## Component API

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `activeTab` | `'track' \| 'ship'` | `'ship'` | Currently active tab |
| `activeShippingType` | `'domestic' \| 'international'` | `'domestic'` | Selected shipping type |
| `shippingForm` | `FormGroup` | - | Reactive form instance |
| `appDownloadLinks` | `AppDownloadLinks \| null` | `null` | App download links |
| `isLoading` | `boolean` | `false` | Loading state indicator |
| `formSubmitted` | `boolean` | `false` | Whether form has been submitted |

### Methods

#### `setActiveTab(tab: 'track' | 'ship'): void`
Sets the active tab.

```typescript
component.setActiveTab('track');
```

#### `setShippingType(type: 'domestic' | 'international'): void`
Sets the active shipping type and updates form.

```typescript
component.setShippingType('international');
```

#### `submitForm(): void`
Submits the form and requests OTP.

```typescript
component.submitForm();
```

#### `navigateToBusiness(): void`
Opens the business signup page in a new tab.

```typescript
component.navigateToBusiness();
```

#### `openAppDownload(platform: 'googlePlay' | 'appStore'): void`
Opens the app store link in a new tab.

```typescript
component.openAppDownload('googlePlay');
```

#### `getFormControl(controlName: string): AbstractControl | null`
Gets a form control for template access.

```typescript
const control = component.getFormControl('pickupPincode');
```

#### `hasError(controlName: string, errorName: string): boolean`
Checks if a form control has a specific error.

```typescript
if (component.hasError('pickupPincode', 'pattern')) {
  // Display error
}
```

## Form Validation

The component uses Reactive Forms with the following validation:

### Pickup Pincode
- Required
- Pattern: 6-digit number

### Delivery Pincode
- Required
- Pattern: 6-digit number

### Shipping Type
- Required
- Options: `'domestic' | 'international'`

Errors are only displayed when:
- The field has been touched/focused
- The field is dirty (value changed)
- Or the form has been submitted

## Styling & Theming

### SCSS Variables

The component uses SCSS variables for easy theming:

```scss
// Colors
$color-white: #ffffff;
$color-black: #000000;
$color-dark-navy: #1a1a1a;
$color-light-gray: #f5f5f5;
$color-border-gray: #e0e0e0;
$color-text-primary: #333333;
$color-text-secondary: #666666;
$color-text-light: #999999;
$color-red-primary: #dc143c;
$color-red-accent: #e74c3c;
$color-blue-accent: #0066cc;

// Spacing
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 12px;
$spacing-lg: 16px;
$spacing-xl: 20px;
$spacing-xxl: 24px;

// Border Radius
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-radius-pill: 24px;

// Font Sizes
$font-size-sm: 12px;
$font-size-base: 14px;
$font-size-md: 16px;
$font-size-lg: 20px;
$font-size-xl: 24px;
$font-size-xxl: 28px;
```

### Responsive Breakpoints

- Desktop: ≥ 768px
- Tablet: 481px - 767px
- Mobile: ≤ 480px

## Accessibility

The component follows WCAG 2.1 accessibility standards:

- ✅ Semantic HTML (proper heading hierarchy, form labels)
- ✅ ARIA labels and descriptions
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Error announcements
- ✅ Color contrast ratios (AAA)
- ✅ Form validation feedback
- ✅ Touch-friendly button sizes (44px minimum)

## Testing

### Running Tests

```bash
ng test
```

### Test Coverage

The component includes comprehensive tests for:
- Form initialization and validation
- Tab navigation
- Shipping type selection
- Form submission
- Error handling
- App download links
- Navigation actions
- Component cleanup

Example test:

```typescript
it('should validate pincode format (6 digits)', () => {
  const pickupControl = component.shippingForm.get('pickupPincode');
  pickupControl?.setValue('12345');
  expect(pickupControl?.hasError('pattern')).toBeTruthy();

  pickupControl?.setValue('123456');
  expect(pickupControl?.hasError('pattern')).toBeFalsy();
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Component uses `OnPush` change detection strategy (recommended for Angular 20)
- Unsubscribes from observables in `ngOnDestroy`
- No memory leaks with proper cleanup
- Efficient form validation with async validators support

## Customization

### Custom Error Messages

To customize error messages, extend the component:

```typescript
export class CustomShippingCard extends ShipPersonalCourierCardComponent {
  getErrorMessage(controlName: string, errorName: string): string {
    const messages: Record<string, Record<string, string>> = {
      pickupPincode: {
        required: 'Pickup location is required',
        pattern: 'Please enter a valid 6-digit pin code'
      }
    };
    return messages[controlName]?.[errorName] || 'Invalid input';
  }
}
```

### Custom Form Validators

Add custom validators by extending the service:

```typescript
export class CustomShippingService extends ShippingService {
  constructor() {
    super();
  }

  validateShippingRoute(pickup: string, delivery: string): Observable<boolean> {
    // Custom logic
    return of(true);
  }
}
```

## Integration Example

### With a Page Component

```typescript
import { Component } from '@angular/core';
import { ShipPersonalCourierCardComponent } from '@app/shared/components';

@Component({
  selector: 'app-shipping-page',
  standalone: true,
  imports: [ShipPersonalCourierCardComponent],
  template: `
    <div class="shipping-page">
      <h1>Delhivery Shipping</h1>
      <app-ship-personal-courier-card></app-ship-personal-courier-card>
    </div>
  `,
  styles: [`
    .shipping-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
  `]
})
export class ShippingPageComponent {}
```

## License

This component is part of the Delhivery Clone project.

## Support

For issues, questions, or improvements, please contact the development team.
