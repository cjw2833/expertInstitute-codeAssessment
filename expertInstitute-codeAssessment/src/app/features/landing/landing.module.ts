import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LandingRoutingModule,
    FormsModule
  ],
  providers: [],
  declarations: [
    LandingComponent,
  ],
})
export class LandingModule { }
