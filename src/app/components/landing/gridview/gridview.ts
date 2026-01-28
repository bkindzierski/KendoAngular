import { Component, signal,computed, effect, input, ChangeDetectorRef } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { Store } from '../../../../models/store';

@Component({
  selector: 'app-gridview',
  imports: [KENDO_GRID],
  templateUrl: './gridview.html',
  styleUrl: './gridview.scss',
})

export class Gridview {

  stores = input.required<Store[]>(); 

  constructor(private cdr: ChangeDetectorRef){
     effect(() => {
      console.log('Stores in Gridview page:', this.stores());
      //this.gridStores = this.getStores();
        
    });
  }
  ngOnInit(){
    //console.log('Stores:', this.stores());
    this.cdr.detectChanges(); 
  }
    
}
