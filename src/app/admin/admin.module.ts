import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  declarations: [
    LoginPageComponent,
    AdminLayoutComponent,
    SearchPipe,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    PreloadingComponent,
    FilterNamePipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
