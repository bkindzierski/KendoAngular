import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { EventStyleArgs, KENDO_SCHEDULER, SchedulerEvent } from '@progress/kendo-angular-scheduler';


@Component({
  selector: 'my-kendo-scheduler',
  imports: [KENDO_SCHEDULER, FormsModule],
  templateUrl: './kendo-scheduler.html',
  styleUrl: './kendo-scheduler.scss',
})
export class MyKendoScheduler implements OnInit {

  public isAllDay = true;
  public eventHeight: 0 | "auto" = "auto";
  public currentYear = new Date().getFullYear();
  public displayDate = new Date();
  public selectedDate: Date = this.displayDate;

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
    
  constructor(){}

  ngOnInit(){

  }
  public getEventClass = (args: EventStyleArgs) => {
    
    const eventId = args.event.dataItem.id;    
    if (eventId === 1 || eventId === 4) return "high-priority";
    if (eventId === 2 || eventId === 5) return "medium-priority";
    return "low-priority";
  };
}
