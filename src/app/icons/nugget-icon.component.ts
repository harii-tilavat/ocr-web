import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IconsRegistry } from './icon-registry';
import { DOCUMENT } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nugget-icon',
  templateUrl: './nugget-icon.component.html',
  styles: [':host {    display: flex;justify-content: center;align-items: center;width: 100%; height: 100%;} :host::ng-deep svg{width: 100%; height: 100%}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NuggetIconComponent implements OnDestroy, OnChanges {
  public subscription: Array<Subscription> = [];
  private svgIcon: SVGElement | undefined;
  // fill: string | undefined;
  @Input()
  set name(iconName: string | null) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconsRegistry.getIcon(iconName as string) || null;
    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }
  @Input()
  set fill(color: string) {
    if (this.svgIcon && color) {
      const paths = this.svgIcon.getElementsByTagName('path') as HTMLCollection;
      // if (this.svgIcon.getAttribute('fill')) {
      //   this.svgIcon.setAttribute('fill', color);
      // }
      for (let i = 0; i < paths.length; i++) {
        if (paths[i].getAttribute('fill')) {
          paths[i].setAttribute('fill', color);
        }
      }
    }
  }

  @Input()
  set stroke(color: string) {
    if (this.svgIcon && color) {
      const paths = this.svgIcon.getElementsByTagName('path') as HTMLCollection;
      for (let i = 0; i < paths.length; i++) {
        if (paths[i].getAttribute('stroke')) {
          paths[i].setAttribute('stroke', color);
        }
      }

    }
  }
  @Input()
  set lineStroke(color: string) {
    if (this.svgIcon && color) {
      const lines = this.svgIcon.getElementsByTagName('line') as HTMLCollection;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].getAttribute('stroke')) {
          lines[i].setAttribute('stroke', color);
        }
      }
    }
  }
  @Input()
  set rectStroke(color: string) {
    if (this.svgIcon && color) {
      const paths = this.svgIcon.getElementsByTagName('rect') as HTMLCollection;
      for (let i = 0; i < paths.length; i++) {
        if (paths[i].getAttribute('stroke')) {
          paths[i].setAttribute('stroke', color);
        }
      }
    }
  }
  @Input()
  set rectFill(color: string) {
    if (this.svgIcon && color) {
      const paths = this.svgIcon.getElementsByTagName('rect') as HTMLCollection;
      for (let i = 0; i < paths.length; i++) {
        if (paths[i].getAttribute('fill')) {
          paths[i].setAttribute('fill', color);
        }
      }
    }
  }
  constructor(private element: ElementRef, private iconsRegistry: IconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: Document) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
