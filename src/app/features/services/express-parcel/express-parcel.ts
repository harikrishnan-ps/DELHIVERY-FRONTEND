import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ExpressParcelContentService } from './express-parcel-content';

@Component({
  selector: 'app-express-parcel',
  imports: [RouterLink],
  templateUrl: './express-parcel.html',
  styleUrl: './express-parcel.scss',
})
export class ExpressParcel {
  readonly content = inject(ExpressParcelContentService);
}
