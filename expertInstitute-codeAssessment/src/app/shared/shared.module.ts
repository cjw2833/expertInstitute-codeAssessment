import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { UserAssetCardComponent } from './user-asset-card/user-asset-card.component';



@NgModule({
  declarations: [
    LoginComponent,
    AssetCardComponent,
    UserAssetCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
