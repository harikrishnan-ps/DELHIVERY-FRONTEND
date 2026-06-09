import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B2bEnterprisesContentService } from './b2b-enterprises-content';

@Component({
  selector: 'app-b2b-enterprises',
  imports: [CommonModule, RouterLink],
  templateUrl: './b2b-enterprises.html',
  styleUrl: './b2b-enterprises.scss',
})
export class B2bEnterprises {
  readonly content = inject(B2bEnterprisesContentService);
}
