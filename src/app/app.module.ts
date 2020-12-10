import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { GreeterComponent } from './greeter/greeter.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { ActiveProductsComponent } from './active-products/active-products.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ActiveProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
