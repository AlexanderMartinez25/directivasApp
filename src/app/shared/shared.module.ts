import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrMsgDirective } from './directives/err-msg.directive';


@NgModule({
  // es parte de este modulo
  declarations: [
    ErrMsgDirective
  ],
  // se exporta para usarse en otros modulos
  exports: [
    ErrMsgDirective
  ]
})
export class SharedModule { }
