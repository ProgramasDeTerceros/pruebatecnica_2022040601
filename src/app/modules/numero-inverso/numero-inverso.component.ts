import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-numero-inverso",
  templateUrl: "./numero-inverso.component.html",
  styleUrls: ["./numero-inverso.component.scss"],
})
export class NumeroInversoComponent implements OnInit {
  public invert: string = "";

  constructor() {}

  ngOnInit(): void {}

  calInverso(evt: any): void {
    const base: string = evt.target.value;
    this.invert = base.split("").reverse().join("");
  }
}
