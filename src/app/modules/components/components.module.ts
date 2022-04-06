import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "src/app/app-routing.module";

const declarations = [NavbarComponent];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, AppRoutingModule],
  exports: [...declarations],
})
export class ComponentsModule {}
