import { Component, signal,computed, effect, ChangeDetectorRef, OnInit, } from '@angular/core';
import { Storedata } from '../../../services/storedata';
import { Store } from '../../../models/store';
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { GridComponent, GridDataResult, KENDO_GRID, PageChangeEvent } from '@progress/kendo-angular-grid';
import { CommonModule,AsyncPipe } from '@angular/common';
//import { Gridview } from '../landing/gridview/gridview'
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs'
import { State } from "@progress/kendo-data-query";

import { CategoriesService } from '../../../services/northwind.service';

@Component({
  selector: 'app-gridpoc',
  imports: [CommonModule, KENDO_GRID, KENDO_LABELS],
  providers: [CategoriesService],
  templateUrl: './gridpoc.html',
  styleUrl: './gridpoc.scss',
})
export class Gridpoc {

  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 5,
  };

  // constructor(public service: CategoriesService) {
  //   this.view = service;    
  //   service.query(this.state);
  // }
  constructor(public service: CategoriesService) {
    this.view = service;    
    service.query(this.state);
  }
  
  public pageChange(state: PageChangeEvent): void {
    this.state.skip = state.skip;
    this.service.query(state);
  }

}
