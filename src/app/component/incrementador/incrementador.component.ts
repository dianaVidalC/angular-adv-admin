import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input() progress: number = 30;
  @Input() btnClass: string = 'btn-primary';
  @Output() value = new EventEmitter<number>();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  valueIncreDecre(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.value.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && value < 0) {
      this.value.emit(0);
      return (this.progress = 0);
    }
    this.value.emit(this.progress + value);
    return (this.progress = this.progress + value);
  }

  changeValue(evt: number) {
    let newValue: number;
    if (evt >= 100) {
      newValue = 100;
    } else if (evt <= 0) {
      newValue = 0;
    } else {
      newValue = evt;
    }
    this.value.emit(newValue);
  }
}
