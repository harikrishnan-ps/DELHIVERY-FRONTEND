import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { TransportOneContentService } from './transport-one-content';

@Component({
  selector: 'app-transport-one',
  imports: [RouterLink],
  templateUrl: './transport-one.html',
  styleUrl: './transport-one.scss',
})
export class TransportOne {
  readonly content = inject(TransportOneContentService);
}
