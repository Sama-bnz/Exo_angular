import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-sign',
  templateUrl: './button-sign.component.html',
  styleUrls: ['./button-sign.component.scss']
})
export class ButtonSignComponent {


@Input() 
type!: string;

}

