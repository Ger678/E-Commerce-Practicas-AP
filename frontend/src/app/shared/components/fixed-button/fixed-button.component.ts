import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fixed-button',
  templateUrl: './fixed-button.component.html',
  styleUrls: ['./fixed-button.component.css']
})
export class FixedButtonComponent implements OnInit {

  @Input() double: boolean = false
  public FirstButton: string = "Comprar"
  public SecondButton: string = "Añadir al Carro"
  @Output() onClick: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(button: number) {
    console.log(button);
    this.onClick.emit(button);
  }

}
