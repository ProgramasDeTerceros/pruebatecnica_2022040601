import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ReglaComponent } from "./regla/regla.component";
import { ListaEmpleadosComponent } from "./lista-empleados/lista-empleados.component";

const declarations = [NavbarComponent, ReglaComponent, ListaEmpleadosComponent];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, AppRoutingModule],
  exports: [...declarations],
})
export class ComponentsModule {}
