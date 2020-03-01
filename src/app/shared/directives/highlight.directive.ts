import { Directive, OnInit, 
                    OnDestroy,
                    ElementRef,
                    HostListener,
                    Renderer2,
                    Input
                  } from '@angular/core';
 
// <h2 appHighlight
// <div appHighlight

// h2, div, any tag that contains directive, is called
//  host element

@Directive({
  // [] - must, represent a property
  // used at any tag/component
  selector: '[appHighlight]',
  exportAs: 'appHighlight' // for #myDir="appHighlight"
})
export class HighlightDirective implements OnInit, OnDestroy {
  // <h2 appHighlight="green"
  @Input('appHighlight')
  color: string = 'lightgreen';
  
  // is injected with host element elementRef
  constructor(private hostElement: ElementRef,
              private renderer: Renderer2) { 
    console.log('HighlightDirective created');
  }

  ngOnInit() {
    console.log('HighlightDirective ngOnInit');
    if (!this.color) { // to fix alias default
      this.color = 'lightgreen'
    };

    console.log('host Tag ', this.hostElement
                              .nativeElement.tagName);
  }

  ngOnDestroy() {
    console.log('HighlightDirective ngOnDestroy');
  }

  @HostListener('click')
  clicked() {
    console.log('click event')
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                           this.color);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.renderer.removeStyle(this.hostElement.nativeElement, 
                              'background');
  }

}
