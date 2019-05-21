import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import 'hammerjs';
import { DataDetailsComponent } from './data-details/data-details.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { StatusCountPipe } from './pipes/status-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataDetailsComponent,
    DataSummaryComponent,
    StatusCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
