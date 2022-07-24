import { NgModule } from '@angular/core';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';


@NgModule({
  // es parte de este modulo
  declarations: [
    ErrMsgDirective,
    CustomIfDirective
  ],
  // se exporta para usarse en otros modulos
  exports: [
    ErrMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
