import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() createdNumber= new EventEmitter<number>();
  lastNumber: number = 0;
  interval;//to clear it later

  constructor() { }

  ngOnInit(): void {
  }

  onGenerateNumber() {
    this.interval = setInterval(() => {
      this.createdNumber.emit(this.lastNumber + 1);
      this.lastNumber++; 
  } ,1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
