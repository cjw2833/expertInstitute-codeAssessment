import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { UserAssetCardComponent } from './user-asset-card/user-asset-card.component';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    LoginComponent,
    AssetCardComponent,
    UserAssetCardComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    LoginComponent,
    AssetCardComponent,
    UserAssetCardComponent
  ],
  providers: [CurrencyPipe],
})
export class SharedModule {
}
