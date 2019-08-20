import { ɵdetectChanges, ɵrenderComponent } from '@angular/core';
import { AngularStarterComponent } from './angular-starter.component';

// reference: https://www.softwarearchitekt.at/en/aktuelles/%F0%9F%8C%BF%F0%9F%93%A6%F0%9F%85%B0%EF%B8%8F-web-components-with-angular-ivy-in-6-steps/
export class AngularStarterElement extends HTMLElement {
  private comp: AngularStarterComponent;

  get title(): string {
    return this.comp.title;
  }

  set title(title: string) {
    this.comp.title = title;
    ɵdetectChanges(this.comp);
  }

  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();
    this.comp = ɵrenderComponent(AngularStarterComponent, {host: this});

    this.comp.countValueChange.subscribe(countValue => this.dispatchEvent(
      new CustomEvent('countValue-change', {detail: countValue}))
    );
  }

  attributeChangeCallback(name, oldValue, newValue): void {
    if (name === 'title') {
      this.title = newValue;
    }
  }
}
