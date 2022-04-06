import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-regla",
  templateUrl: "./regla.component.html",
  styleUrls: ["./regla.component.scss"],
})
export class ReglaComponent implements OnInit {
  @Input() regla: string = "";
  @Input() description: string = "";
  @Input() invalid: boolean = false;

  @Output() public onAplic: EventEmitter<void>;

  constructor() {
    this.onAplic = new EventEmitter();
  }

  ngOnInit(): void {}

  aplicarRegla() {
    console.log("aplic" + this.regla);
    this.onAplic.emit();
  }
}
