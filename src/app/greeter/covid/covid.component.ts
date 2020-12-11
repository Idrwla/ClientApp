import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  hide(): void{
    this.clicked.emit(true);
  }
}
