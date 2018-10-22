import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title = 'routing';

  constructor(private router: Router, private route :ActivatedRoute){}

  component1() {
  	this.router.navigate(['binding1']);
  }

  component2() {
  	this.router.navigate(['binding2']);
  }

  component3() {
  	this.router.navigate(['binding3']);
  }
  component4() {
  	this.router.navigate(['binding4']);
  }


}