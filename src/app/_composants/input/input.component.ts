import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
    label!:string;

  @Input()
    type!: string;
  @Input()
    name!: string;
  @Input()
    id!: string;
  @Input()
    placeholder!: string;

    
  @Output() value:EventEmitter<string> = new EventEmitter<string>();
  isPassword!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isPassword = this.type == 'password' ;
  }
  
}
