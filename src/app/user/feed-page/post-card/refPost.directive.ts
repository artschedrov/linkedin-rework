import {Directive, ViewContainerRef} from '@angular/core'

@Directive({
  selector: '[postRef]'
})

export class RefPostDirective {
  constructor(public containerRef: ViewContainerRef) {
  }
}