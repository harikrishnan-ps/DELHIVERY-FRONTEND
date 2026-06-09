import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { WarehousingContentService } from './warehousing-content';

@Component({
  selector: 'app-warehousing',
  imports: [RouterLink],
  templateUrl: './warehousing.html',
  styleUrl: './warehousing.scss',
})
export class Warehousing {
  readonly content = inject(WarehousingContentService);
}
