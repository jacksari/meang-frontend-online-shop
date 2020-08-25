import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClassStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleValue = false;
  @Output() toggleChange = new EventEmitter<boolean>();

  toggled(): void {
    if (this.toggleValue === undefined){
      this.toggleValue = false;
    }
    this.toggleValue = !this.toggleValue;
    this.toggleChange.emit(this.toggleValue);
    // console.log('toggle', this.toggleValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
