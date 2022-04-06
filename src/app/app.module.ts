import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./modules/components/components.module";
import { ListEntradaComponent } from "./modules/list-entrada/list-entrada.component";
import { NumeroInversoComponent } from "./modules/numero-inverso/numero-inverso.component";

@NgModule({
  declarations: [AppComponent, ListEntradaComponent, NumeroInversoComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
