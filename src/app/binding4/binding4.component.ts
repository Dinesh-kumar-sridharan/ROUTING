import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding4',
  templateUrl: './binding4.component.html',
  styleUrls: ['./binding4.component.css']
})
export class Binding4Component  {

   callEvent() {
  		alert('this is event binding');
   }

}
