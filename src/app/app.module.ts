import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { TestPipe } from './shared/pipes/test.pipe';
import {SharedModule} from "./shared/modules/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interceptor";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
    declarations: [
        AppComponent,
        TestPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SharedModule
    ],
    providers: [INTERCEPTOR_PROVIDER],
    exports: [
        TestPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
