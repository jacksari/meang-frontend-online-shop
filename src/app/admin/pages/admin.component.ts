import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{

  toggleValue = false;
  contenedor: any;

  constructor() { }
  toggled($event): void{
    console.log('admin', $event);
    this.toggleValue = $event;
  }
  


}
