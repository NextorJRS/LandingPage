import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {

  @Input('appResaltar') animacion: string;


  constructor(private elemento: ElementRef, private render: Renderer2) { }


  @HostListener('mouseenter') hover() {
    this.render.addClass(this.elemento.nativeElement, 'animate__animated');

    switch (this.animacion) {
      case '1':
        this.render.addClass(this.elemento.nativeElement, 'animate__bounce');
        break;
        case '2':
          this.render.addClass(this.elemento.nativeElement, 'animate__rubberBand');
          break;
          case '3':
            this.render.addClass(this.elemento.nativeElement, 'animate__jello');
            break;
            case '4':
              this.render.addClass(this.elemento.nativeElement, 'animate__heartBeat');
              break;
              default:
                this.render.addClass(this.elemento.nativeElement, 'animate__pulse');
                break;
              }
            }
  @HostListener('mouseleave') leave() {
    this.render.addClass(this.elemento.nativeElement, 'animate__animated');
    switch (this.animacion) {
      case '1':
        this.render.removeClass(this.elemento.nativeElement, 'animate__bounce');
        break;
      case '2':
        this.render.removeClass(this.elemento.nativeElement, 'animate__rubberBand');
        break;
      case '3':
        this.render.removeClass(this.elemento.nativeElement, 'animate__jello');
        break;
      case '4':
        this.render.removeClass(this.elemento.nativeElement, 'animate__heartBeat');
        break;
      default:
        this.render.removeClass(this.elemento.nativeElement, 'animate__pulse');
        break;
    }
  }
}
