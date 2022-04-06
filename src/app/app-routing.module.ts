import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListEntradaComponent } from "./modules/list-entrada/list-entrada.component";
import { NumeroInversoComponent } from "./modules/numero-inverso/numero-inverso.component";

const routes: Routes = [
  { path: "entrada", component: ListEntradaComponent },
  { path: "inverso", component: NumeroInversoComponent },
  { path: "**", pathMatch: "full",redirectTo: "entrada" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
