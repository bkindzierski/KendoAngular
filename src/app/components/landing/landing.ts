import { Component, signal,computed, effect, ChangeDetectorRef, OnInit, } from '@angular/core';
import { Storedata } from '../../../services/storedata';
import { Store } from '../../../models/store';
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { GridComponent, GridDataResult, KENDO_GRID, SelectionEvent } from '@progress/kendo-angular-grid';
import { CommonModule,AsyncPipe,DatePipe } from '@angular/common';
//import { Gridview } from '../landing/gridview/gridview'
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';
import { SelectableSettings } from '@progress/kendo-angular-treeview';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { orderBy, SortDescriptor, State, process } from '@progress/kendo-data-query';
import { KENDO_SVGICON } from '@progress/kendo-angular-icons';
import { editToolsIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-landing',
  //imports: [CommonModule,KENDO_LABELS,KENDO_GRID,Gridview],
  imports: [CommonModule,KENDO_LABELS,KENDO_GRID,KENDO_SVGICON, AsyncPipe],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing  {

  #stores = signal<Store[]>([]);
  //stores = signal<Store[]>([]);
  // public gridStores:Store[] = [];
  
  private serviceSubscription: Subscription;
  public gridStores$!: Observable<Store[]>; // Data source as an Observable
  public view: Observable<GridDataResult>;
  public editIcon = editToolsIcon;

  public selectableSettings: SelectableSettings = { 
    //checkboxOnly: false
  };
  
  public gridData: GridDataResult | undefined
  /** GRID state */
  public gridState: State = {
    skip:0,
    take:10,
    sort:[],
    group:[]
  }

  // public skip = 0;
  // public pageSize = 10;
  // public sort: SortDescriptor[] = [{
  //   field: 'storeName',
  //   dir: 'asc'
  // }];

  constructor(private storeService: Storedata,
              private cdr: ChangeDetectorRef)  {
   
    this.loadStores();    
    
    effect(() => {
      //console.log('Stores in landing page:', this.#stores());      
    });
  }

  public  ngOnInit(): void{  
    
  } 

  public onDataStateChange(newState: State){
    this.gridState = newState;
    this.loadStores();
  }


  /** */
  public onSelectionChange(args: SelectionEvent){
    const cellItem =  args.selectedRows[0].dataItem as any
    //console.log('args', cellItem.storeId);
  }

  /** */
  // public onPageChange(args: PageChangeEvent){
  //   this.skip = args.skip;
  //   //
  //   this.loadStores();
  // }

  // /** */
  // public onSortChange(args: SortDescriptor[]){
  //   this.sort =args;

  //   this.loadStores();

  // }
  
  async loadStores(){ 
    try {
        //**promise */
        // const stores = await this.storeService.getStoreData(); 
        // this.#stores.set(stores);

        /**obervable */
        this.serviceSubscription = this.storeService.getStoreDataObservable().subscribe((resp:Store[])=>{
            this.#stores.set(resp);                                      
        });       
        
      } 
      catch (err) {
        console.log(err);
      }
  }

  getStores = computed(()=>{
    //const stores = this.#stores();
    //return stores;   
    // return this.gridData = {
    //   data: orderBy(this.#stores().slice(this.skip, this.skip + this.pageSize), this.sort),
    //   total: this.#stores().length
    // }
    return this.gridData = process(this.#stores(), this.gridState);
    
  });

  public getIndicatorImage(item:any) : string{
    //return ItemType.getIndicatorImage(item.type)
    return '';
  }


  public  ngOnDestroy(): void {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }    
  }
}