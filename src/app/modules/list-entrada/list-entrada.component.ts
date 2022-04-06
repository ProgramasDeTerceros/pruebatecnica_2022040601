import { Component, OnInit } from "@angular/core";
import { EmpleadoModel } from "src/app/shared/models/empleadoModel";

@Component({
  selector: "app-list-entrada",
  templateUrl: "./list-entrada.component.html",
  styleUrls: ["./list-entrada.component.scss"],
})
export class ListEntradaComponent implements OnInit {
  public empleados: EmpleadoModel[];

  constructor() {
    this.empleados = [
      { nombre: "Juan" },
      { nombre: "Andrea" },
      { nombre: "Carlos" },
      { nombre: "Catalina" },
      { nombre: "Jorge" },
    ];
  }
  ngOnInit(): void {
    //  this.regla1(true);
    //  this.regla2(true);
    // this.regla3(true);
  }

  findIndexEmpleado(empleado: String): number {
    return this.empleados.findIndex((x) => x.nombre == empleado);
  }

  changeOrden(index1: number, index2: number): void {
    if (index1 < 0 && index2 < 0) {
      return;
    }
    const temp = { ...this.empleados[index1] };
    this.empleados[index1] = { ...this.empleados[index2] };
    this.empleados[index2] = { ...temp };
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
        console.log({
          empleadoTemprano,
          indexTemprano,
          empleadoTarde,
          indexTarde,
          empleados: this.empleados,
        });
        this.changeOrden(indexTemprano, indexTarde);
      }
      return false;
    }
    return true;
  }

  regla1(corregir: boolean = false): boolean {
    const valid = this.evaluarOrden("Catalina", "Carlos", corregir),
      valid2 = this.evaluarOrden("Juan", "Carlos", corregir);
    return valid && valid2;
  }

  regla2(corregir: boolean = false): boolean {
    const valid = this.evaluarOrden("Jorge", "Juan", corregir),
      valid2 = this.evaluarOrden("Jorge", "Andrea", corregir);
    return valid && valid2;
  }

  regla3(corregir: boolean = false): boolean {
    const valid = this.evaluarOrden("Jorge", "Catalina", corregir),
      valid2 = this.evaluarOrden("Catalina", "Juan", corregir);
    return valid && valid2;
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
    return !this.regla2();
  }
  get regla3Invalid(): boolean {
    return !this.regla3();
  }
}
