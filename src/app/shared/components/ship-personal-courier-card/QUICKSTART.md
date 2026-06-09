# Quick Start Guide: Ship Personal Courier Card Component

## 🚀 Getting Started in 2 Minutes

### 1. Import the Component

```typescript
// In your feature component or page
import { ShipPersonalCourierCardComponent } from '@app/shared/components/ship-personal-courier-card';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [ShipPersonalCourierCardComponent],
  template: `
    <div class="page-wrapper">
      <app-ship-personal-courier-card></app-ship-personal-courier-card>
    </div>
  `
})
export class MyPageComponent {}
```

### 2. That's It!

The component comes fully configured with:
- Reactive Forms with validation
- Services pre-configured
- Responsive styling
- Accessibility built-in

## 📁 File Structure

```
src/app/shared/
├── components/
│   └── ship-personal-courier-card/
│       ├── ship-personal-courier-card.ts       (Component)
│       ├── ship-personal-courier-card.html     (Template)
│       ├── ship-personal-courier-card.scss     (Styles)
│       ├── ship-personal-courier-card.spec.ts  (Tests)
│       ├── index.ts                            (Exports)
│       └── README.md                           (Full docs)
└── services/
    ├── shipping.service.ts                     (Service)
    └── shipping.service.spec.ts                (Tests)
```

## 🎨 Component Features

| Feature | Details |
|---------|---------|
| **Tabs** | Track Order / Ship Order |
| **Toggle** | Domestic / International |
| **Inputs** | Pickup & Delivery Pincode |
| **Button** | Get OTP & Ship Now |
| **Links** | Business Signup Link |
| **App Section** | Google Play & App Store |
| **Validation** | 6-digit pincode format |
| **Accessibility** | WCAG 2.1 Compliant |
| **Responsive** | Mobile, Tablet, Desktop |

## 🔧 Configuration

### Update API Endpoints

Edit `shipping.service.ts`:

```typescript
submitShippingForm(formData: ShippingFormData): Observable<any> {
  // Replace with your actual API call
  return this.http.post('/api/shipping/submit', formData);
}

getOTP(pincode: string): Observable<any> {
  // Replace with your actual API call
  return this.http.post('/api/otp/request', { pincode });
}
```

### Update Download Links

Edit `shipping.service.ts`:

```typescript
private appDownloadLinks: AppDownloadLinks = {
  googlePlay: 'YOUR_GOOGLE_PLAY_URL',
  appStore: 'YOUR_APP_STORE_URL'
};
```

### Update Business Signup URL

Edit `ship-personal-courier-card.ts`:

```typescript
navigateToBusiness(): void {
  window.open('/YOUR_BUSINESS_SIGNUP_URL', '_blank');
}
```

## 🎯 Common Use Cases

### Form Submission Handling

```typescript
export class MyComponent {
  @ViewChild(ShipPersonalCourierCardComponent) 
  courierCard!: ShipPersonalCourierCardComponent;

  onFormSubmit() {
    if (this.courierCard.shippingForm.valid) {
      const data = this.courierCard.shippingForm.value;
      console.log('Form data:', data);
    }
  }
}
```

### Listening to Form Changes

```typescript
export class MyComponent implements OnInit {
  @ViewChild(ShipPersonalCourierCardComponent) 
  courierCard!: ShipPersonalCourierCardComponent;

  ngOnInit() {
    this.courierCard.shippingForm.valueChanges.subscribe(value => {
      console.log('Form updated:', value);
    });
  }
}
```

### Setting Default Values

```typescript
export class MyComponent implements OnInit {
  @ViewChild(ShipPersonalCourierCardComponent) 
  courierCard!: ShipPersonalCourierCardComponent;

  ngOnInit() {
    this.courierCard.shippingForm.patchValue({
      pickupPincode: '110001',
      deliveryPincode: '560001',
      shippingType: 'domestic'
    });
  }
}
```

## 🧪 Running Tests

```bash
# Run all tests
ng test

# Run tests for specific component
ng test --include='**/ship-personal-courier-card.spec.ts'

# Run with coverage
ng test --code-coverage
```

## 📱 Responsive Behavior

- **Desktop (769px+)**: Full layout with all elements visible
- **Tablet (481px - 768px)**: Optimized spacing and touch targets
- **Mobile (≤480px)**: Single column, larger touch areas

## 🎨 Theming

Override SCSS variables by importing before the component styles:

```scss
$color-red-primary: #ff6b6b;
$color-dark-navy: #2d3436;
$spacing-lg: 20px;

@import 'path/to/ship-personal-courier-card.scss';
```

## ♿ Accessibility

The component includes:
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Error announcements
- ✅ Color contrast (AAA)
- ✅ Touch-friendly (44px buttons)

## 🐛 Troubleshooting

### Component not showing?
- Check that `ShipPersonalCourierCardComponent` is in imports
- Verify the component is standalone or module is imported

### Form validation not working?
- Ensure `ReactiveFormsModule` is imported
- Check browser console for errors

### Styling looks off?
- Clear browser cache
- Rebuild the project: `ng build`
- Check SCSS variables are loaded

### Service not working?
- Verify `ShippingService` is provided
- Check API endpoints are correct
- Look for CORS issues in network tab

## 📖 Full Documentation

See [README.md](./README.md) for complete API documentation, service details, and advanced usage.

## 💡 Tips & Best Practices

1. **Inject the service** only when needed - it's provided at root level
2. **Use the form control getters** for template binding
3. **Subscribe in `ngOnInit`** and unsubscribe in `ngOnDestroy`
4. **Test form validation** before deployment
5. **Update API endpoints** before going to production
6. **Use the example component** as a reference for integration

## 🔗 Related Documentation

- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)
- [Angular Accessibility](https://angular.io/guide/accessibility)
- [SCSS Best Practices](https://sass-lang.com/guide)
- [Testing Angular Components](https://angular.io/guide/testing-components-scenarios)

---

**Need help?** Check the README.md or review the component tests for more examples!
