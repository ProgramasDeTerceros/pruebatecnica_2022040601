import { Component, OnInit } from "@angular/core";
import { EmpleadoModel } from "src/app/shared/models/empleadoModel";

@Component({
  selector: "app-list-entrada",
  templateUrl: "./list-entrada.component.html",
  styleUrls: ["./list-entrada.component.scss"],
})
export class ListEntradaComponent implements OnInit {
  private empleadosBase: EmpleadoModel[];
  public empleados: EmpleadoModel[] = [];

  constructor() {
    this.empleadosBase = [
      { nombre: "Juan" },
      { nombre: "Andrea" },
      { nombre: "Carlos" },
      { nombre: "Catalina" },
      { nombre: "Jorge" },
    ];
    this.UpdateEmpleados();
  }
  UpdateEmpleados(): void {
    this.empleados = { ...this.empleadosBase };
  }
  ngOnInit(): void {
    // this.regla1(true);
    // this.regla2(true);
    // this.regla3(true);
  }

  findIndexEmpleado(empleado: String): number {
    return this.empleadosBase.findIndex((x) => x.nombre == empleado);
  }

  changeOrden(index1: number, index2: number): void {
    const temp = { ...this.empleadosBase[index1] };
    this.empleadosBase[index1] = { ...this.empleadosBase[index2] };
    this.empleadosBase[index2] = temp;

    this.UpdateEmpleados();
  }
  evaluarOrden(
    empleadoTemprano: String,
    empleadoTarde: String,
    corregir: boolean = false
  ): boolean {
    const indexTemprano = this.findIndexEmpleado(empleadoTemprano);
    const indexTarde = this.findIndexEmpleado(empleadoTarde);
    if (indexTemprano > indexTarde) {
      if (corregir) {
        this.changeOrden(indexTemprano, indexTarde);
      }
      return false;
    }
    return true;
  }

  regla1(corregir: boolean = false): boolean {
    return (
      this.evaluarOrden("Catalina", "Carlos", corregir) &&
      this.evaluarOrden("Juan", "Calos", corregir)
    );
  }

  regla2(corregir: boolean = false): boolean {
    return (
      this.evaluarOrden("Jorge", "Juan", corregir) &&
      this.evaluarOrden("Jorge", "Andrea", corregir)
    );
  }

  regla3(corregir: boolean = false): boolean {
    return (
      this.evaluarOrden("Jorge", "Catalina", corregir) &&
      this.evaluarOrden("Catalina", "Juan", corregir)
    );
  }
  regla1Aplicar(): void {
    this.regla1(true);
  }
  regla2Aplicar(): void {
    this.regla2(true);
  }
  regla3Aplicar(): void {
    this.regla3(true);
  }

  get regla1Invalid(): boolean {
    return !this.regla1();
  }
  get regla2Invalid(): boolean {
    return !this.regla1();
  }
  get regla3Invalid(): boolean {
    return !this.regla1();
  }
}
