import { Component } from '@angular/core';


import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {KENDO_DATEINPUTS} from '@progress/kendo-angular-dateinputs';
import {MyKendoScheduler} from '../kendo-scheduler/kendo-scheduler'

@Component({
  selector: 'app-home',
  imports: [MatTab, MatTabGroup,KENDO_DATEINPUTS, MyKendoScheduler],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

    constructor(){

    }
}
