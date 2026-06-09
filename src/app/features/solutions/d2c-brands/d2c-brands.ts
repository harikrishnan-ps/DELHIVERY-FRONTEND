import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D2cBrandsContentService } from './d2c-brands-content';

@Component({
  selector: 'app-d2c-brands',
  imports: [CommonModule, RouterLink],
  templateUrl: './d2c-brands.html',
  styleUrl: './d2c-brands.scss',
})
export class D2cBrands {
  readonly content = inject(D2cBrandsContentService);
}
