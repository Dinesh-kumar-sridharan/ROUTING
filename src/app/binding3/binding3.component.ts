import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding3',
  templateUrl: './binding3.component.html',
  styleUrls: ['./binding3.component.css']
})
export class Binding3Component {

 propertyActive:boolean=false;

 disable() {
 	this.propertyActive=true;
 }

 enable() {
 	this.propertyActive=false;
 }

}
