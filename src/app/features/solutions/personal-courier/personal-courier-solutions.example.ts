import { Component } from '@angular/core';
import { ShipPersonalCourierCardComponent } from '../../../shared/components/ship-personal-courier-card';

/**
 * Example: Personal Courier Solutions Page
 * This demonstrates how to integrate the ShipPersonalCourierCard component
 * in a feature page for personal courier shipping solutions.
 */
@Component({
  selector: 'app-personal-courier-solutions',
  standalone: true,
  imports: [ShipPersonalCourierCardComponent],
  template: `
    <div class="solutions-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Ship with Delhivery</h1>
          <p>Fast, reliable, and affordable shipping solutions for your packages</p>
        </div>
      </section>

      <!-- Main Shipping Card -->
      <section class="shipping-section">
        <div class="section-wrapper">
          <app-ship-personal-courier-card></app-ship-personal-courier-card>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2>Why Choose Delhivery?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📦</div>
            <h3>Fast Delivery</h3>
            <p>Same-day and next-day delivery options available</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Secure Packaging</h3>
            <p>Your packages are handled with utmost care</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Live Tracking</h3>
            <p>Track your shipments in real-time on our app</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Affordable Rates</h3>
            <p>Competitive pricing with no hidden charges</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .solutions-container {
      width: 100%;
      min-height: 100vh;
      background: #f8f9fa;
    }

    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 3rem 1rem;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero-content p {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .shipping-section {
      padding: 3rem 1rem;
    }

    .section-wrapper {
      max-width: 700px;
      margin: 0 auto;
    }

    .features-section {
      padding: 3rem 1rem;
      background: white;
      margin-top: 2rem;
    }

    .features-section h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #333;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      border-radius: 8px;
      background: #f8f9fa;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .feature-card p {
      color: #666;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 1.8rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PersonalCourierSolutionsComponent {}
