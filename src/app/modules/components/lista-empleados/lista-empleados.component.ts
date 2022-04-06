import { Component, Input, OnInit } from "@angular/core";
import { EmpleadoModel } from "src/app/shared/models/empleadoModel";

@Component({
  selector: "app-lista-empleados",
  templateUrl: "./lista-empleados.component.html",
  styleUrls: ["./lista-empleados.component.scss"],
})
export class ListaEmpleadosComponent implements OnInit {
  @Input() empleados: EmpleadoModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
