import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'angularDetails',
  template: `<h4>Angular {{fullVersion}}</h4>`,
  styles: [`h4 { font-family: Lato; }`]
})
export class AngularDetailsComponent  {
  fullVersion:string = VERSION.full;
}
