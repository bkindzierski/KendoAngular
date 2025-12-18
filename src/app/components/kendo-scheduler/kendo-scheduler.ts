import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder,FormGroup, ReactiveFormsModule, ValidatorFn, Validators, Form } from '@angular/forms'; // Import FormsModule
import { EventStyleArgs, KENDO_SCHEDULER, SchedulerEvent, CreateFormGroupArgs,EditMode } from '@progress/kendo-angular-scheduler';

import "@progress/kendo-date-math/tz/regions/NorthAmerica";

@Component({
  selector: 'my-kendo-scheduler',
  imports: [KENDO_SCHEDULER, FormsModule, ReactiveFormsModule],
  templateUrl: './kendo-scheduler.html',
  styleUrl: './kendo-scheduler.scss',
})
export class MyKendoScheduler implements OnInit {

  public isAllDay = true;
  public eventHeight: 0 | "auto" = "auto";
  public currentYear = new Date().getFullYear();
  public displayDate = new Date();
  public selectedDate: Date = this.displayDate;  
  public formGroup: FormGroup;


  public events: SchedulerEvent[] = [
        {
            id: 1,
            title: '1 JMK-do not schedule',
            start: new Date('2025-12-12T09:00:00'),
            end: new Date('2025-12-12T10:00:00')
        },
        {
            id: 2,
            title: '2 BDK-do not schedule',
            start: new Date('2025-12-18:00:00'),
            end: new Date('2025-12-18:00:00')
        },
        {
            id: 3,
            title: '3 BDK-do not schedule',
            start: new Date('2025-12-31:00:00'),
            end: new Date('2025-12-31:00:00')
        },
        {
            id: 4,
            title: '4 JMK-do not schedule',
            start: new Date('2025-12-26:00:00'),
            end: new Date('2025-12-26:00:00')
        }

    ];
    
  constructor(private formBuilder: FormBuilder){
     this.createFormGroup = this.createFormGroup.bind(this);
  }

  ngOnInit(){

  }

  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;
    const isOccurrence = args.mode === (EditMode.Occurrence as any);
    const exceptions = isOccurrence ? [] : dataItem.recurrenceExceptions;

    this.formGroup = this.formBuilder.group(
      {
        id: args.isNew ? this.getNextId() : dataItem.id,
        start: [dataItem.start, Validators.required],
        end: [dataItem.end, Validators.required],
        startTimezone: [dataItem.startTimezone],
        endTimezone: [dataItem.endTimezone],
        isAllDay: dataItem.isAllDay,
        title: dataItem.title,
        description: dataItem.description,
        recurrenceRule: dataItem.recurrenceRule,
        recurrenceId: dataItem.recurrenceId,
        recurrenceExceptions: [exceptions],
      },
      {
        validator: this.startEndValidator,
      }
    );

    return this.formGroup;
  }

  public getNextId(): number {
      const len = this.events.length;

      return len === 0 ? 1 : this.events[this.events.length - 1].id + 1;
  }

  public startEndValidator: ValidatorFn = (fg: FormGroup) => {
    const start = fg.get("start").value;
    const end = fg.get("end").value;

    if (start !== null && end !== null && start.getTime() < end.getTime()) {
      return null;
    } else {
      return { range: "End date must be greater than Start date" };
    }
  }

  public getEventClass = (args: EventStyleArgs) => {
    
    const eventId = args.event.dataItem.id;    
    if (eventId === 1 || eventId === 4) return "high-priority";
    if (eventId === 2 || eventId === 5) return "medium-priority";
    return "low-priority";
  }
}
