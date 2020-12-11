import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GreeterComponent} from './greeter/greeter.component';
import {SingInComponent} from './sing-in/sing-in.component';
import {SingUpComponent} from './sing-up/sing-up.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {TicketsComponent} from './tickets/tickets.component';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';
import {PayPageComponent} from './pay-page/pay-page.component';
import {PartnerPageComponent} from './partner-page/partner-page.component';
import {BecomePartnerComponent} from './become-partner/become-partner.component';
import {ActiveProductsComponent} from './active-products/active-products.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AuthUserGuard} from './Services/auth-user.guard';
import {PartnerRegGuard} from './Services/partner-reg.guard';

const PayPage: Routes = [{
  path: 'pay', component: PayPageComponent
}];
const ActiveProducts: Routes = [{
  path: 'activeProducts', component: ActiveProductsComponent
}];
const routes: Routes = [
  {
    path: '', component: GreeterComponent
  },
  {
    path: 'singIn', component: SingInComponent
  },
  {
    path: 'singUp', component: SingUpComponent
  },
  {
    path: 'userDetail', component: UserDetailComponent, canActivate: [AuthUserGuard]
  },
  {
    path: 'tickets', component: TicketsComponent
  },
  {
    path: 'ticketDetail/:id', component: TicketDetailComponent, children: PayPage
  },
  {
    path: 'partner', component: PartnerPageComponent, children: ActiveProducts, canActivate: [PartnerRegGuard]
  },
  {
    path: 'becomePartner', component: BecomePartnerComponent
  },
  {
    path: 'aboutUs', component: AboutUsComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthUserGuard]
})
export class AppRoutingModule {
}
