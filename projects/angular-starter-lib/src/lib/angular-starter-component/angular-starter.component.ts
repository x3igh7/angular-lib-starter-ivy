import { Component, EventEmitter, Input, OnInit, Output, ɵdetectChanges } from '@angular/core';

@Component({
  selector: 'lib-angular-starter-lib',
  template: `
    <button (click)="increment()">Increment</button>
    <div>{{countValue}}</div>
  `,
  styles: []
})
export class AngularStarterComponent {
  @Input() title = 'Title';
  @Output() countValueChange = new EventEmitter<number>();
  countValue = 0;

  constructor() { }

  increment(): void {
    this.countValue++;
    this.countValueChange.emit(this.countValue);

    // zone-less change detection
    ɵdetectChanges(this);
  }
}
