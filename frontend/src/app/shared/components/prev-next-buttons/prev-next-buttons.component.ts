import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prev-next-buttons',
  templateUrl: './prev-next-buttons.component.html',
  styleUrls: ['./prev-next-buttons.component.css']
})
export class PrevNextButtonsComponent implements OnInit {

  @Output() onClickButton: EventEmitter<String> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

    // Next & Previous Buttons || increment and decrement the value of the id variable
    public next(){
      console.log("next")
      this.onClickButton.emit("next");
    }

    public previous(){
      console.log("prev")
      this.onClickButton.emit("prev");
    }
}
