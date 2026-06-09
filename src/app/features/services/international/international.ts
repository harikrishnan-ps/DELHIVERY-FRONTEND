import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { InternationalContentService } from './international-content';

@Component({
  selector: 'app-international',
  imports: [RouterLink],
  templateUrl: './international.html',
  styleUrl: './international.scss',
})
export class International {
  readonly content = inject(InternationalContentService);
}
