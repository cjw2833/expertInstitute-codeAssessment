import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AssetsHttpService } from './services/assets-http.service';
import { CurrencySearchFilterPipe } from './pipes/currency-search-filter.pipe';


@NgModule({
  declarations: [
    CurrencySearchFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CurrencySearchFilterPipe
  ],
  providers: [
    AssetsHttpService,
  ]
})
export class CoreModule { }
