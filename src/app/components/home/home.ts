import { Component } from '@angular/core';


import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {KENDO_DATEINPUTS} from '@progress/kendo-angular-dateinputs';
import {MyKendoScheduler} from '../kendo-scheduler/kendo-scheduler'
import { KENDO_BUTTONS,ButtonSize,ButtonRounded,ButtonFillMode,ButtonThemeColor } from "@progress/kendo-angular-buttons";
import {  SVGIcon,  cartIcon,  anchorIcon,  codeIcon, pencilIcon, dataIcon, fileAddIcon,
} from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-home',
  imports: [MatTab, MatTabGroup,KENDO_DATEINPUTS, MyKendoScheduler, KENDO_BUTTONS],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  public size: ButtonSize = "medium";
  public rounded: ButtonRounded = "medium";
  public fillMode: ButtonFillMode = "outline";
  public themeColor: ButtonThemeColor = "primary";
  /** */

  public svgData: SVGIcon = dataIcon;
  public svgAdd: SVGIcon = fileAddIcon;
  public svgCode: SVGIcon = codeIcon;
 
  constructor(){

  }

 addEventClick(){
    console.log('addEvent click');
 }

  empSchedule():void{

    console.log('empSchedule click');
  }
}
