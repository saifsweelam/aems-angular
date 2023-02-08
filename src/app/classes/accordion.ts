import { ElementRef } from '@angular/core'
import { AccordionItem } from "./accordion-item";

export class Accordion {
    constructor(private element : ElementRef, private items : AccordionItem[]) { this.generate(); }

    private generate() {
        this.items.forEach((item : AccordionItem, i : Number) => {
            this.element.nativeElement.insertAdjacentHTML(
                'beforeend',
                `<div class="accordion-item">
                    <input type="checkbox" id="accordionItem${i}" class="accordion-item-checkbox hidden">
                    <label for="accordionItem${i}" class="accordion-item-label">${item.title}</label>
                    <div class="accordion-item-body">
                        <div class="accordion-item-container">${item.body}</div>
                    </div>
                </div>`
            );
        })
    }

    public addItem(item : AccordionItem) {
        this.items.push(item);
        this.generate();
    }
}
