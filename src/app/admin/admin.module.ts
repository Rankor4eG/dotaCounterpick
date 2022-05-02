import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPipe} from "./shared/pipes/search.pipe";
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {SharedModule} from "../shared/modules/shared.module";
import {AuthGuard} from "./shared/services/auth.guard";
import { PreloadingComponent } from './dashboard-page/preloading/preloading.component';
import { FilterNamePipe } from './dashboard-page/filter-name.pipe';
import { AlertComponent } from './shared/components/alert/alert.component';
import {AlertService} from "./shared/services/alert.service";

@NgModule({
  declarations: [
    LoginPageComponent,
    AdminLayoutComponent,
    SearchPipe,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    PreloadingComponent,
    FilterNamePipe,
    AlertComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AlertService
  ]
})
export class AdminModule { }
