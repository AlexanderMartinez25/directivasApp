import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red'
  private _mensaje: string = 'Este campo es requerido'

  htmlElement: ElementRef<HTMLElement>;

  // al recibir la propiedad del padre seteamos de una el color del elemento
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }


  // @Input() mensaje: string = 'Este campo es requerido';

  @Input() set mensaje(valor: string) {
    console.log(valor);
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(): void {
    /*  console.log(this.color, this.mensaje);
        this.setColor();
        this.setMensaje(); */
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this.color;
  // }

  // setMensaje(): void {
  //   this.htmlElement.nativeElement.innerText = this.mensaje;
  // }

}
