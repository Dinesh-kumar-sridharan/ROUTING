import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//components
import { AppComponent } from './app.component';
import { Binding1Component } from './binding1/binding1.component';
import { Binding2Component } from './binding2/binding2.component';
import { Binding3Component } from './binding3/binding3.component';
import { Binding4Component } from './binding4/binding4.component';

const routes:Routes=[
	{path:'binding1', component: Binding1Component},
	{path:'binding2', component: Binding2Component},
	{path:'binding3', component: Binding3Component},
	{path:'binding4', component: Binding4Component}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class RoutingModule{}