import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Accordion } from '../../classes/accordion';
import { AccordionItem } from '../../classes/accordion-item';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FaqComponent implements OnInit {

  @ViewChild('accordion') accordionElement : ElementRef;

  accordionItems : AccordionItem[] = [
    new AccordionItem("Who can join AEMS school?", "All Egyptian students who can play FIFA"),
    new AccordionItem("Is settling available for far away students?", "At the current moment, there is no local accomodation for students at school. But there are a lot of rented houses near the school with affordable costs."),
    new AccordionItem("Is studying at AEMS expensive?", "AEMS applies the official learning costs published by the Egyptian Ministry of Education"),
    new AccordionItem("What are the school hours?", "The school is open everyday except Friday from 07:00 AM to 02:00 PM."),
    new AccordionItem("Does the school offer any extracurricular activities?", "Yes, this school offers a variety of extracurricular activities, such as sports, clubs, and other social activities, for students to participate in. You should contact the school for more information about the available activities."),
  ];

  accordion : Accordion;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.accordion = new Accordion(this.accordionElement, this.accordionItems);
  }
}
