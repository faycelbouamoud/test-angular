import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollEventModule } from "ngx-scroll-event";

import { MaterialModule } from "./material/material.module";
import { AppComponent } from "./app.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { AgreementComponent } from "./components/agreement/agreement.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "./services/login.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, LoginFormComponent, AgreementComponent],
  imports: [BrowserModule, MaterialModule, ScrollEventModule, ReactiveFormsModule, HttpClientModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
