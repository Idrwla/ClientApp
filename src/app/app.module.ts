import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {SingInComponent} from './sing-in/sing-in.component';
import {SingUpComponent} from './sing-up/sing-up.component';
import {GreeterComponent} from './greeter/greeter.component';
import {TicketsComponent} from './tickets/tickets.component';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';
import {PayPageComponent} from './pay-page/pay-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PartnerPageComponent} from './partner-page/partner-page.component';
import {ActiveProductsComponent} from './active-products/active-products.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BecomePartnerComponent} from './become-partner/become-partner.component';
import {RouterModule} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {CovidComponent} from './greeter/covid/covid.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {BackButtonDirective} from './Directives/back-button.directive';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    SingInComponent,
    SingUpComponent,
    GreeterComponent,
    TicketsComponent,
    TicketDetailComponent,
    PayPageComponent,
    NotFoundComponent,
    PartnerPageComponent,
    ActiveProductsComponent,
    BecomePartnerComponent,
    AboutUsComponent,
    CovidComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
