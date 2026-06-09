import { Routes } from '@angular/router';
import { Home } from './features/home/home/home';
import { DeliveryPartner } from './features/partner/delivery-partner/delivery-partner';
import { FleetOwners } from './features/partner/fleet-owners/fleet-owners';
import { FranchiseOpportunities } from './features/partner/franchise-opportunities/franchise-opportunities';
import { DataIntelligence } from './features/services/data-intelligence/data-intelligence';
import { ExpressParcel } from './features/services/express-parcel/express-parcel';
import { FullTruckload } from './features/services/full-truckload/full-truckload';
import { International } from './features/services/international/international';
import { PartTruckload } from './features/services/part-truckload/part-truckload';
import { TransportOne } from './features/services/transport-one/transport-one';
import { Warehousing } from './features/services/warehousing/warehousing';
import { ShipNow } from './features/ship-now/ship-now/ship-now';
import { B2bEnterprises } from './features/solutions/b2b-enterprises/b2b-enterprises';
import { D2cBrands } from './features/solutions/d2c-brands/d2c-brands';
import { PersonalCourier } from './features/solutions/personal-courier/personal-courier';
import { RtoPredictor } from './features/solutions/rto-predictor/rto-predictor';
import { Support } from './features/support/support/support';
import { Tracking } from './features/tracking/tracking/tracking';

import { RegisterLogin } from './features/auth/register-login/register-login';
import { AdminDashboard } from './features/admin/admin-dashboard/admin-dashboard';
import { AdminLayout } from './features/admin/admin-layout/admin-layout';
import { AdminShipments } from './features/admin/admin-shipments/admin-shipments';
import { AdminUsers } from './features/admin/admin-users/admin-users';
import { AdminSettings } from './features/admin/admin-settings/admin-settings';

import { BookingLayout } from './features/booking/booking-layout/booking-layout';
import { AddressDetails } from './features/booking/address-details/address-details';
import { PackageDetails } from './features/booking/package-details/package-details';
import { SchedulePickup } from './features/booking/schedule-pickup/schedule-pickup';
import { SummaryDetails } from './features/booking/summary-details/summary-details';

import { TrackingLayout } from './features/tracking/tracking-layout/tracking-layout';
import { ProfileComponent } from './features/tracking/profile/profile';
import { OrdersComponent } from './features/tracking/orders/orders';
import { AddressesComponent } from './features/tracking/addresses/addresses';
import { HelpSupportComponent } from './features/tracking/help-support/help-support';
import { SettingsComponent } from './features/tracking/settings/settings';
import { PrivacySettingsComponent } from './features/tracking/privacy-settings/privacy-settings';
import { AccountSettingsComponent } from './features/tracking/account-settings/account-settings';

import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: RegisterLogin,
  },
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'shipments', component: AdminShipments },
      { path: 'users', component: AdminUsers },
      { path: 'settings', component: AdminSettings },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'services/express-parcel',
    component: ExpressParcel,
    canActivate: [authGuard],
  },
  {
    path: 'services/warehousing',
    component: Warehousing,
    canActivate: [authGuard],
  },
  {
    path: 'services/data-intelligence',
    component: DataIntelligence,
    canActivate: [authGuard],
  },
  {
    path: 'services/full-truckload',
    component: FullTruckload,
    canActivate: [authGuard],
  },
  {
    path: 'services/international',
    component: International,
    canActivate: [authGuard],
  },
  {
    path: 'services/part-truckload',
    component: PartTruckload,
    canActivate: [authGuard],
  },
  {
    path: 'services/transport-one',
    component: TransportOne,
    canActivate: [authGuard],
  },
  {
    path: 'solutions/d2c-brands',
    component: D2cBrands,
    canActivate: [authGuard],
  },
  {
    path: 'solutions/personal-courier',
    component: PersonalCourier,
    canActivate: [authGuard],
  },
  {
    path: 'solutions/b2b-enterprises',
    component: B2bEnterprises,
    canActivate: [authGuard],
  },
  {
    path: 'solutions/rto-predictor',
    component: RtoPredictor,
    canActivate: [authGuard],
  },
  {
    path: 'partner/franchise-opportunities',
    component: FranchiseOpportunities,
    canActivate: [authGuard],
  },
  {
    path: 'partner/delivery-partner',
    component: DeliveryPartner,
    canActivate: [authGuard],
  },
  {
    path: 'partner/fleet-owners',
    component: FleetOwners,
    canActivate: [authGuard],
  },
  {
    path: 'track',
    component: Tracking,
    canActivate: [authGuard],
  },
  {
    path: 'support',
    component: Support,
    canActivate: [authGuard],
  },
  {
    path: 'ship-now',
    component: ShipNow,
    canActivate: [authGuard],
  },
  {
    path: 'direct/app',
    component: BookingLayout,
    canActivate: [authGuard],
    children: [
      { path: 'address-details', component: AddressDetails },
      { path: 'package-details', component: PackageDetails },
      { path: 'schedule-pickup', component: SchedulePickup },
      { path: 'summary-details', component: SummaryDetails },
      { path: '', redirectTo: 'address-details', pathMatch: 'full' }
    ]
  },
  {
    path: 'track-v2',
    component: TrackingLayout,
    canActivate: [authGuard],
    children: [
      { path: 'my-profile', component: ProfileComponent },
      { path: 'my-orders', component: OrdersComponent },
      { path: 'my-addresses', component: AddressesComponent },
      { path: 'my-helpAndSupport', component: HelpSupportComponent },
      { path: 'my-settings', component: SettingsComponent },
      { path: 'my-settings/privacy', component: PrivacySettingsComponent },
      { path: 'my-settings/account', component: AccountSettingsComponent },
      { path: '', redirectTo: 'my-orders', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];
